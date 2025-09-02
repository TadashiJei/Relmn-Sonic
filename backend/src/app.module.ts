import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from './health/health.module';
import { ScribesModule } from './scribes/scribes.module';
import { ScribblesModule } from './scribbles/scribbles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BlockchainModule } from './blockchain/blockchain.module';
import { EncryptionModule } from './encryption/encryption.module';
import { CredentialsModule } from './credentials/credentials.module';
import { FeesModule } from './fees/fees.module';
import { LoggerModule } from 'nestjs-pino';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { randomUUID } from 'node:crypto';
import { RolesGuard } from './auth/roles.guard';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
        // Redact sensitive data from logs
        redact: {
          paths: [
            'req.headers.authorization',
            'req.headers.cookie',
            'res.headers["set-cookie"]',
            'req.body.password',
            'req.body.passwordHash',
            'req.query.apiKey',
          ],
          remove: true,
        },
        transport:
          process.env.NODE_ENV === 'development'
            ? {
                target: 'pino-pretty',
                options: {
                  singleLine: true,
                  colorize: true,
                  translateTime: 'SYS:standard',
                },
              }
            : undefined,
        genReqId: (req) => (req.headers['x-request-id'] as string) || randomUUID(),
        customProps: (req) => ({ requestId: (req as any).id }),
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'test', 'production').default('development'),
        PORT: Joi.number().default(3000),
        MONGODB_URI: Joi.string()
          .uri({ scheme: ['mongodb', 'mongodb+srv'] })
          .required(),
        JWT_SECRET: Joi.string().min(8).required(),
        JWT_EXPIRES_IN: Joi.string().optional(),
        SONIC_RPC_URL: Joi.string().uri().optional(),
        SONIC_CHAIN_ID: Joi.number().optional(),
        SCRIBBLE_CONTRACT_ADDRESS: Joi.string().optional(),
        SCRIBE_PROFILE_CONTRACT_ADDRESS: Joi.string().optional(),
        FEE_DISTRIBUTION_CONTRACT_ADDRESS: Joi.string().optional(),
        CREDENTIAL_REGISTRY_CONTRACT_ADDRESS: Joi.string().optional(),
        CHAIN_PRIVATE_KEY: Joi.string().pattern(/^0x[0-9a-fA-F]{64}$/).optional(),
        FEE_VERIFY_ON_RECORD: Joi.boolean().default(false),
      }),
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60_000,
          limit: 120,
        },
      ],
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
        autoIndex: config.get<string>('NODE_ENV') !== 'production',
      }),
    }),
    HealthModule,
    ScribesModule,
    ScribblesModule,
    UsersModule,
    AuthModule,
    BlockchainModule,
    EncryptionModule,
    CredentialsModule,
    FeesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}

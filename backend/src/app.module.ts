import { Module } from '@nestjs/common';
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

@Module({
  imports: [
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
      }),
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

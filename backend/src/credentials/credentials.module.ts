import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CredentialsController } from './credentials.controller';
import { CredentialsService } from './credentials.service';
import { Credential, CredentialSchema } from './schemas/credential.schema';
import { BlockchainModule } from '../blockchain/blockchain.module';
import { ScribesModule } from '../scribes/scribes.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Credential.name, schema: CredentialSchema }]),
    BlockchainModule,
    ScribesModule,
  ],
  controllers: [CredentialsController],
  providers: [CredentialsService],
  exports: [CredentialsService],
})
export class CredentialsModule {}

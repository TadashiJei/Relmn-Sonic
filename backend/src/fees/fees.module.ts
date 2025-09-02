import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FeesService } from './fees.service';
import { FeeEvent, FeeEventSchema } from './schemas/fee-event.schema';
import { FeesController } from './fees.controller';
import { BlockchainModule } from '../blockchain/blockchain.module';

@Module({
  imports: [ConfigModule, BlockchainModule, MongooseModule.forFeature([{ name: FeeEvent.name, schema: FeeEventSchema }])],
  controllers: [FeesController],
  providers: [FeesService],
  exports: [FeesService],
})
export class FeesModule {}

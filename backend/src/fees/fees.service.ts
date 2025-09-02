import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FeeEvent, FeeEventDocument } from './schemas/fee-event.schema';
import { ConfigService } from '@nestjs/config';
import { BlockchainService } from '../blockchain/blockchain.service';

@Injectable()
export class FeesService {
  constructor(
    @InjectModel(FeeEvent.name) private readonly model: Model<FeeEventDocument>,
    private readonly config: ConfigService,
    private readonly chain: BlockchainService,
  ) {}

  async record(event: Pick<FeeEvent, 'scribbleId' | 'txHash' | 'amount' | 'payer' | 'recipient'>) {
    const verify = this.config.get<boolean>('FEE_VERIFY_ON_RECORD');
    if (verify) {
      await this.chain.waitForTx(event.txHash, 1);
    }
    const doc = new this.model(event);
    return doc.save();
  }

  async listByScribble(scribbleId: string) {
    const id = new Types.ObjectId(scribbleId);
    return this.model.find({ scribbleId: id }).sort({ createdAt: -1 }).exec();
  }
}

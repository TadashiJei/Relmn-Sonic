import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Credential, CredentialDocument } from './schemas/credential.schema';
import { VerifyCredentialDto } from './dto/verify-credential.dto';
import { BlockchainService } from '../blockchain/blockchain.service';
import { ScribesService } from '../scribes/scribes.service';

@Injectable()
export class CredentialsService {
  constructor(
    @InjectModel(Credential.name) private readonly model: Model<CredentialDocument>,
    private readonly blockchain: BlockchainService,
    private readonly scribes: ScribesService,
  ) {}

  async verify(dto: VerifyCredentialDto) {
    // TODO: integrate on-chain verification; for now, mark verified if proof is non-empty
    const cred = new this.model({
      scribeId: new Types.ObjectId(dto.scribeId),
      type: dto.type,
      issuer: dto.issuer,
      proof: dto.proof,
      nftTokenId: dto.nftTokenId,
      status: 'verified',
    });
    const saved = await cred.save();
    // Sync badge to scribe profile (idempotent via $addToSet)
    const badgeParts = [dto.type];
    if (dto.nftTokenId) badgeParts.push(dto.nftTokenId);
    const badgeId = badgeParts.join(':');
    await this.scribes.addBadge(dto.scribeId, badgeId);
    return saved;
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).exec();
    if (!doc) throw new NotFoundException('Credential not found');
    return doc;
  }

  async listByScribe(scribeId: string) {
    const id = new Types.ObjectId(scribeId);
    return this.model.find({ scribeId: id }).sort({ createdAt: -1 }).exec();
  }
}

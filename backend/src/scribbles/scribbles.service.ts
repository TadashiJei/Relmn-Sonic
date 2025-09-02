import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Scribble, ScribbleDocument } from './schemas/scribble.schema';
import { CreateScribbleDto } from './dto/create-scribble.dto';
import { UpdateScribbleDto } from './dto/update-scribble.dto';
import { UpvoteScribbleDto } from './dto/upvote-scribble.dto';
import { InteractionsService } from '../interactions/interactions.service';
import { EncryptionService } from '../encryption/encryption.service';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class ScribblesService {
  constructor(
    @InjectModel(Scribble.name)
    private readonly scribbleModel: Model<ScribbleDocument>,
    private readonly interactions: InteractionsService,
    private readonly encryption: EncryptionService,
  ) {}

  async create(dto: CreateScribbleDto): Promise<Scribble> {
    const created = new this.scribbleModel({
      ...dto,
      scribeId: new Types.ObjectId(dto.scribeId),
    });
    return created.save();
  }

  async findAll(): Promise<Scribble[]> {
    return this.scribbleModel.find().exec();
  }

  async findOne(id: string): Promise<Scribble> {
    const doc = await this.scribbleModel.findById(id).exec();
    if (!doc) throw new NotFoundException('Scribble not found');
    return doc;
  }

  async update(id: string, dto: UpdateScribbleDto): Promise<Scribble> {
    const updated = await this.scribbleModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!updated) throw new NotFoundException('Scribble not found');
    return updated;
  }

  async upvote(id: string, dto: UpvoteScribbleDto) {
    const scribbleObjectId = new Types.ObjectId(id);
    const created = await this.interactions.addUpvote(dto.scribeId, id);
    if (created) {
      await this.scribbleModel
        .updateOne({ _id: scribbleObjectId }, { $inc: { upvotes: 1 } })
        .exec();
    }
    return this.findOne(id);
  }

  async comment(id: string, scribeId: string, commentText: string) {
    await this.interactions.addComment(scribeId, id, commentText);
    await this.scribbleModel.updateOne({ _id: id }, { $inc: { commentsCount: 1 } }).exec();
    return this.findOne(id);
  }

  async unlock(id: string, secret: string) {
    const scribble = await this.findOne(id);
    if (!scribble.contentCiphertext || !scribble.contentNonce || !scribble.contentAuthTag) {
      throw new BadRequestException('Scribble does not have encrypted content');
    }
    const content = this.encryption.decrypt(
      scribble.contentCiphertext,
      scribble.contentNonce,
      scribble.contentAuthTag,
      secret,
    );
    return { content };
  }
}

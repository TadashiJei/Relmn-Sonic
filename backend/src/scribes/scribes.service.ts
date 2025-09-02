import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Scribe, ScribeDocument } from './schemas/scribe.schema';
import { CreateScribeDto } from './dto/create-scribe.dto';
import { UpdateScribeDto } from './dto/update-scribe.dto';

@Injectable()
export class ScribesService {
  constructor(
    @InjectModel(Scribe.name) private readonly scribeModel: Model<ScribeDocument>,
  ) {}

  async create(dto: CreateScribeDto): Promise<Scribe> {
    const created = new this.scribeModel(dto);
    return created.save();
  }

  async findAll(handle?: string): Promise<Scribe[]> {
    if (handle) {
      return this.scribeModel.find({ handle: handle.toLowerCase() }).exec();
    }
    return this.scribeModel.find().exec();
  }

  async findOne(id: string): Promise<Scribe> {
    const doc = await this.scribeModel.findById(id).exec();
    if (!doc) throw new NotFoundException('Scribe not found');
    return doc;
  }

  async update(id: string, dto: UpdateScribeDto): Promise<Scribe> {
    const updated = await this.scribeModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
    if (!updated) throw new NotFoundException('Scribe not found');
    return updated;
  }

  async addBadge(scribeId: string, badgeId: string): Promise<Scribe> {
    const doc = await this.scribeModel
      .findByIdAndUpdate(
        scribeId,
        { $addToSet: { badges: badgeId } },
        { new: true },
      )
      .exec();
    if (!doc) throw new NotFoundException('Scribe not found');
    return doc;
  }
}

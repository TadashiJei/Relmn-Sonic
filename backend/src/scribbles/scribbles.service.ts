import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Scribble, ScribbleDocument } from './schemas/scribble.schema';
import { CreateScribbleDto } from './dto/create-scribble.dto';
import { UpdateScribbleDto } from './dto/update-scribble.dto';

@Injectable()
export class ScribblesService {
  constructor(
    @InjectModel(Scribble.name)
    private readonly scribbleModel: Model<ScribbleDocument>,
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
}

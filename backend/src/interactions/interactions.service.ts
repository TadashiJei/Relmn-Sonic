import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Interaction, InteractionDocument } from './schemas/interaction.schema';

@Injectable()
export class InteractionsService {
  constructor(
    @InjectModel(Interaction.name)
    private readonly model: Model<InteractionDocument>,
  ) {}

  async addUpvote(scribeId: string, scribbleId: string): Promise<boolean> {
    try {
      await this.model.create({
        scribeId: new Types.ObjectId(scribeId),
        scribbleId: new Types.ObjectId(scribbleId),
        type: 'upvote',
      });
      return true;
    } catch (e: any) {
      // Duplicate upvote (unique index) => treat as no-op
      if (e && e.code === 11000) return false;
      throw e;
    }
  }

  async addComment(scribeId: string, scribbleId: string, commentText: string) {
    return this.model.create({
      scribeId: new Types.ObjectId(scribeId),
      scribbleId: new Types.ObjectId(scribbleId),
      type: 'comment',
      commentText,
    });
  }
}

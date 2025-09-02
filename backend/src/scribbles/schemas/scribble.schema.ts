import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ScribbleDocument = HydratedDocument<Scribble>;

@Schema({ timestamps: true })
export class Scribble {
  @Prop({ type: Types.ObjectId, ref: 'Scribe', required: true })
  scribeId!: Types.ObjectId;

  @Prop({ required: true, maxlength: 280 })
  contentPreview!: string; // public preview text

  @Prop()
  contentCiphertext?: string; // encrypted full content (optional for now)

  @Prop()
  contentNonce?: string;

  @Prop()
  contentAuthTag?: string;

  @Prop({ type: [String], default: [] })
  tags?: string[];

  @Prop({ type: Number, default: 0 })
  upvotes?: number;

  @Prop({ type: Number, default: 0 })
  commentsCount?: number;
}

export const ScribbleSchema = SchemaFactory.createForClass(Scribble);
// Indexes for query performance
ScribbleSchema.index({ scribeId: 1, createdAt: -1 });
ScribbleSchema.index({ createdAt: -1 });

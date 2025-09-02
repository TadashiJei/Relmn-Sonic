import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type InteractionDocument = HydratedDocument<Interaction>;
export type InteractionType = 'upvote' | 'comment';

@Schema({ timestamps: true })
export class Interaction {
  @Prop({ type: Types.ObjectId, ref: 'Scribe', required: true })
  scribeId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Scribble', required: true })
  scribbleId!: Types.ObjectId;

  @Prop({ required: true, enum: ['upvote', 'comment'] })
  type!: InteractionType;

  @Prop()
  commentText?: string;
}

export const InteractionSchema = SchemaFactory.createForClass(Interaction);
InteractionSchema.index({ scribbleId: 1, createdAt: -1 });
InteractionSchema.index({ scribeId: 1, createdAt: -1 });
// prevent duplicate upvotes by same scribe on same scribble
InteractionSchema.index(
  { scribeId: 1, scribbleId: 1, type: 1 },
  { unique: true, partialFilterExpression: { type: 'upvote' } as any },
);

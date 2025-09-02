import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type FeeEventDocument = HydratedDocument<FeeEvent>;

@Schema({ timestamps: true })
export class FeeEvent {
  @Prop({ type: Types.ObjectId, ref: 'Scribble', required: true })
  scribbleId!: Types.ObjectId;

  @Prop({ required: true, unique: true })
  txHash!: string;

  @Prop({ required: true })
  amount!: string; // store as string (wei)

  @Prop({ required: true })
  payer!: string;

  @Prop({ required: true })
  recipient!: string;
}

export const FeeEventSchema = SchemaFactory.createForClass(FeeEvent);
FeeEventSchema.index({ scribbleId: 1, createdAt: -1 });

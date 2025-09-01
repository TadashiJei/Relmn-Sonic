import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ScribeDocument = HydratedDocument<Scribe>;

@Schema({ timestamps: true })
export class Scribe {
  @Prop({ required: true, unique: true, lowercase: true })
  wallet!: string; // EVM address

  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  handle!: string; // unique username/handle

  @Prop({ default: '' })
  bio?: string;

  @Prop({ type: [String], default: [] })
  badges?: string[]; // e.g., NFT badge ids
}

export const ScribeSchema = SchemaFactory.createForClass(Scribe);
// Explicit indexes to ensure creation
ScribeSchema.index({ handle: 1 }, { unique: true });
ScribeSchema.index({ wallet: 1 }, { unique: true });

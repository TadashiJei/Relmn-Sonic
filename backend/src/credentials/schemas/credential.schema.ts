import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CredentialDocument = HydratedDocument<Credential>;

export type CredentialStatus = 'pending' | 'verified' | 'rejected';

@Schema({ timestamps: true })
export class Credential {
  @Prop({ type: Types.ObjectId, ref: 'Scribe', required: true })
  scribeId!: Types.ObjectId;

  @Prop({ required: true })
  type!: string;

  @Prop({ required: true })
  issuer!: string;

  @Prop({ required: true })
  proof!: string;

  @Prop({ default: 'pending' })
  status!: CredentialStatus;

  @Prop()
  nftTokenId?: string;
}

export const CredentialSchema = SchemaFactory.createForClass(Credential);
CredentialSchema.index({ scribeId: 1, type: 1, createdAt: -1 });

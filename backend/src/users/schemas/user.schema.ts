import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, toJSON: { virtuals: true, versionKey: false, transform: (_doc, ret: any) => { delete ret.passwordHash; return ret; } } })
export class User {
  @Prop({ required: true, trim: true })
  firstName: string;

  @Prop({ required: true, trim: true })
  lastName: string;

  @Prop({ required: false, trim: true })
  phone?: string;

  @Prop({ required: false, trim: true })
  country?: string;

  @Prop({ required: true, lowercase: true, trim: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
// Explicit unique index for email (preferred over @Prop unique)
UserSchema.index({ email: 1 }, { unique: true });

import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

export interface CreateUserParams {
  firstName: string;
  lastName: string;
  phone?: string;
  country?: string;
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async createUser(params: CreateUserParams): Promise<UserDocument> {
    const existing = await this.userModel.findOne({ email: params.email.toLowerCase() }).lean();
    if (existing) {
      throw new ConflictException('Email already in use');
    }
    const passwordHash = await bcrypt.hash(params.password, 10);
    const created = await this.userModel.create({
      firstName: params.firstName,
      lastName: params.lastName,
      phone: params.phone,
      country: params.country,
      email: params.email.toLowerCase(),
      passwordHash,
    });
    return created;
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email: email.toLowerCase() });
  }

  async findById(id: string): Promise<UserDocument> {
    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async verifyPassword(user: UserDocument, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.passwordHash);
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async register(dto: RegisterDto) {
    const user = await this.usersService.createUser({
      firstName: dto.firstName,
      lastName: dto.lastName,
      phone: dto.phone,
      country: dto.country,
      email: dto.email,
      password: dto.password,
    });
    const accessToken = await this.sign(user.id, user.email);
    return { user, accessToken };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const ok = await this.usersService.verifyPassword(user, dto.password);
    if (!ok) throw new UnauthorizedException('Invalid credentials');
    const accessToken = await this.sign(user.id, user.email);
    return { user, accessToken };
  }

  private async sign(sub: string, email: string) {
    return this.jwtService.signAsync({ sub, email });
  }

  async refresh(sub: string, email: string) {
    const accessToken = await this.sign(sub, email);
    return { accessToken };
  }
}

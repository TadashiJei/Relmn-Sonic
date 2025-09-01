import { IsEthereumAddress, IsOptional, IsString, Length, Matches } from 'class-validator';

export class CreateScribeDto {
  @IsEthereumAddress()
  wallet!: string;

  @IsString()
  @Matches(/^[a-z0-9_]+$/)
  @Length(3, 20)
  handle!: string;

  @IsOptional()
  @IsString()
  @Length(0, 280)
  bio?: string;
}

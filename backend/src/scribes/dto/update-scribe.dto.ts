import { IsOptional, IsString, Length, Matches } from 'class-validator';

export class UpdateScribeDto {
  @IsOptional()
  @IsString()
  @Matches(/^[a-z0-9_]+$/)
  @Length(3, 20)
  handle?: string;

  @IsOptional()
  @IsString()
  @Length(0, 280)
  bio?: string;
}

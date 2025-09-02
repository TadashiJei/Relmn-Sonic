import { IsArray, ArrayMaxSize, IsOptional, IsString, Length, Matches } from 'class-validator';

export class UpdateScribbleDto {
  @IsOptional()
  @IsString()
  @Length(1, 280)
  contentPreview?: string;

  @IsOptional()
  @IsString()
  contentCiphertext?: string;

  @IsOptional()
  @IsString()
  contentNonce?: string;

  @IsOptional()
  @IsString()
  contentAuthTag?: string;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(5)
  @IsString({ each: true })
  @Matches(/^[a-z0-9_]+$/,{ each: true })
  @Length(1, 24, { each: true })
  tags?: string[];
}

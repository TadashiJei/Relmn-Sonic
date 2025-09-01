import { IsArray, ArrayMaxSize, IsMongoId, IsOptional, IsString, Length, Matches } from 'class-validator';

export class CreateScribbleDto {
  @IsMongoId()
  scribeId!: string;

  @IsString()
  @Length(1, 280)
  contentPreview!: string;

  @IsOptional()
  @IsString()
  contentCiphertext?: string;

  @IsOptional()
  @IsString()
  contentNonce?: string;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(5)
  @IsString({ each: true })
  @Matches(/^[a-z0-9_]+$/,{ each: true })
  @Length(1, 24, { each: true })
  tags?: string[];
}

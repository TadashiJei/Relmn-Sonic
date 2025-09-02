import { IsString, Length } from 'class-validator';

export class UnlockScribbleDto {
  @IsString()
  @Length(1, 256)
  secret!: string;
}

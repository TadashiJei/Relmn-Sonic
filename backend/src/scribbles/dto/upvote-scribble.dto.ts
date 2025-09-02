import { IsMongoId } from 'class-validator';

export class UpvoteScribbleDto {
  @IsMongoId()
  scribeId!: string;
}

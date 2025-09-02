import { IsMongoId, IsString, Length } from 'class-validator';

export class CommentScribbleDto {
  @IsMongoId()
  scribeId!: string;

  @IsString()
  @Length(1, 500)
  commentText!: string;
}

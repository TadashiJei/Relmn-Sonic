import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ScribblesService } from './scribbles.service';
import { CreateScribbleDto } from './dto/create-scribble.dto';
import { UpdateScribbleDto } from './dto/update-scribble.dto';
import { UpvoteScribbleDto } from './dto/upvote-scribble.dto';
import { CommentScribbleDto } from './dto/comment-scribble.dto';
import { UnlockScribbleDto } from './dto/unlock-scribble.dto';

@ApiTags('Scribbles')
@ApiBearerAuth('bearer')
@Controller('scribbles')
export class ScribblesController {
  constructor(private readonly scribblesService: ScribblesService) {}

  @Post()
  create(@Body() dto: CreateScribbleDto) {
    return this.scribblesService.create(dto);
  }

  @Get()
  findAll() {
    return this.scribblesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scribblesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateScribbleDto) {
    return this.scribblesService.update(id, dto);
  }

  @Post(':id/upvote')
  upvote(@Param('id') id: string, @Body() dto: UpvoteScribbleDto) {
    return this.scribblesService.upvote(id, dto);
  }

  @Post(':id/comment')
  comment(@Param('id') id: string, @Body() dto: CommentScribbleDto) {
    return this.scribblesService.comment(id, dto.scribeId, dto.commentText);
  }

  @Post(':id/unlock')
  unlock(@Param('id') id: string, @Body() dto: UnlockScribbleDto) {
    return this.scribblesService.unlock(id, dto.secret);
  }
}

import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ScribblesService } from './scribbles.service';
import { CreateScribbleDto } from './dto/create-scribble.dto';
import { UpdateScribbleDto } from './dto/update-scribble.dto';

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
}

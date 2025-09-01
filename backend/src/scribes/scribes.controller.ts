import { Controller, Get, Post, Body, Param, Patch, Query } from '@nestjs/common';
import { ScribesService } from './scribes.service';
import { CreateScribeDto } from './dto/create-scribe.dto';
import { UpdateScribeDto } from './dto/update-scribe.dto';

@Controller('scribes')
export class ScribesController {
  constructor(private readonly scribesService: ScribesService) {}

  @Post()
  create(@Body() dto: CreateScribeDto) {
    return this.scribesService.create(dto);
  }

  @Get()
  findAll(@Query('handle') handle?: string) {
    return this.scribesService.findAll(handle);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scribesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateScribeDto) {
    return this.scribesService.update(id, dto);
  }
}

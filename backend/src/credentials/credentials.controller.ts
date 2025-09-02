import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { VerifyCredentialDto } from './dto/verify-credential.dto';

@Controller('credentials')
export class CredentialsController {
  constructor(private readonly service: CredentialsService) {}

  @Post('verify')
  verify(@Body() dto: VerifyCredentialDto) {
    return this.service.verify(dto);
  }

  @Get('by-scribe/:scribeId')
  listByScribe(@Param('scribeId') scribeId: string) {
    return this.service.listByScribe(scribeId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}

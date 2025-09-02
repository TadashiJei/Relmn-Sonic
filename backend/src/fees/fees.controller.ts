import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Types } from 'mongoose';
import { FeesService } from './fees.service';
import { RecordFeeDto } from './dto/record-fee.dto';

@Controller('fees')
export class FeesController {
  constructor(private readonly service: FeesService) {}

  @Post('record')
  async record(@Body() dto: RecordFeeDto) {
    return this.service.record({
      scribbleId: new Types.ObjectId(dto.scribbleId) as any,
      txHash: dto.txHash,
      amount: dto.amount,
      payer: dto.payer,
      recipient: dto.recipient,
    } as any);
  }

  @Get('by-scribble/:scribbleId')
  listByScribble(@Param('scribbleId') scribbleId: string) {
    return this.service.listByScribble(scribbleId);
  }
}

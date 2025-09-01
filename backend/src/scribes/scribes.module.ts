import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScribesService } from './scribes.service';
import { ScribesController } from './scribes.controller';
import { Scribe, ScribeSchema } from './schemas/scribe.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Scribe.name, schema: ScribeSchema }]),
  ],
  controllers: [ScribesController],
  providers: [ScribesService],
  exports: [ScribesService],
})
export class ScribesModule {}

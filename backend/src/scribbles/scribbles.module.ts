import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScribblesController } from './scribbles.controller';
import { ScribblesService } from './scribbles.service';
import { Scribble, ScribbleSchema } from './schemas/scribble.schema';
import { InteractionsModule } from '../interactions/interactions.module';
import { EncryptionModule } from '../encryption/encryption.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Scribble.name, schema: ScribbleSchema }]),
    InteractionsModule,
    EncryptionModule,
  ],
  controllers: [ScribblesController],
  providers: [ScribblesService],
  exports: [ScribblesService],
})
export class ScribblesModule {}

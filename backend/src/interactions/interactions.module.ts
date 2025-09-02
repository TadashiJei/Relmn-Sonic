import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Interaction, InteractionSchema } from './schemas/interaction.schema';
import { InteractionsService } from './interactions.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Interaction.name, schema: InteractionSchema }])],
  providers: [InteractionsService],
  exports: [InteractionsService],
})
export class InteractionsModule {}

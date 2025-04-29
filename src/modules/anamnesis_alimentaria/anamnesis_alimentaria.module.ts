import { Module } from '@nestjs/common';
import { AnamnesisAlimentariaService } from './anamnesis_alimentaria.service';
import { AnamnesisAlimentariaController } from './anamnesis_alimentaria.controller';

@Module({
  controllers: [AnamnesisAlimentariaController],
  providers: [AnamnesisAlimentariaService],
})
export class AnamnesisAlimentariaModule {}

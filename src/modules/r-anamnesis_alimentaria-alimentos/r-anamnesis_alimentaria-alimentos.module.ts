import { Module } from '@nestjs/common';
import { RAnamnesisAlimentariaAlimentosService } from './r-anamnesis_alimentaria-alimentos.service';
import { RAnamnesisAlimentariaAlimentosController } from './r-anamnesis_alimentaria-alimentos.controller';

@Module({
  controllers: [RAnamnesisAlimentariaAlimentosController],
  providers: [RAnamnesisAlimentariaAlimentosService],
})
export class RAnamnesisAlimentariaAlimentosModule {}

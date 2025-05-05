import { Module } from '@nestjs/common';
import { EncuestaTendenciaConsumoService } from './encuesta_tendencia_consumo.service';
import { EncuestaTendenciaConsumoController } from './encuesta_tendencia_consumo.controller';

@Module({
  controllers: [EncuestaTendenciaConsumoController],
  providers: [EncuestaTendenciaConsumoService],
})
export class EncuestaTendenciaConsumoModule {}

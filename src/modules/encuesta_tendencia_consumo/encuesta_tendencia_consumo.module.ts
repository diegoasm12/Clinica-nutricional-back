import { Module } from '@nestjs/common';
import { EncuestaTendenciaConsumoService } from './encuesta_tendencia_consumo.service';
import { EncuestaTendenciaConsumoController } from './encuesta_tendencia_consumo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncuestaTendenciaConsumo } from './entities/encuesta_tendencia_consumo.entity';
import { REncuestaTendenciaConsumoAlimentoModule } from '../r-encuesta-tendencia-consumo-alimento/r-encuesta-tendencia-consumo-alimento.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EncuestaTendenciaConsumo]),
    REncuestaTendenciaConsumoAlimentoModule,
  ],
  controllers: [EncuestaTendenciaConsumoController],
  providers: [EncuestaTendenciaConsumoService],
})
export class EncuestaTendenciaConsumoModule {}

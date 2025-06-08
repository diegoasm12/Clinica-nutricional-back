import { Module } from '@nestjs/common';
import { REncuestaTendenciaConsumoAlimentoService } from './r-encuesta-tendencia-consumo-alimento.service';
import { REncuestaTendenciaConsumoAlimentoController } from './r-encuesta-tendencia-consumo-alimento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { REncuestaTendenciaConsumoAlimento } from './entities/r-encuesta-tendencia-consumo-alimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([REncuestaTendenciaConsumoAlimento])],
  controllers: [REncuestaTendenciaConsumoAlimentoController],
  providers: [REncuestaTendenciaConsumoAlimentoService],
  exports: [REncuestaTendenciaConsumoAlimentoService],
})
export class REncuestaTendenciaConsumoAlimentoModule {}

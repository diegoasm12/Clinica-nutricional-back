import { Module } from '@nestjs/common';
import { REncuestatendenciaconsumoAlimentoService } from './r-encuestatendenciaconsumo-alimento.service';
import { REncuestatendenciaconsumoAlimentoController } from './r-encuestatendenciaconsumo-alimento.controller';

@Module({
  controllers: [REncuestatendenciaconsumoAlimentoController],
  providers: [REncuestatendenciaconsumoAlimentoService],
})
export class REncuestatendenciaconsumoAlimentoModule {}

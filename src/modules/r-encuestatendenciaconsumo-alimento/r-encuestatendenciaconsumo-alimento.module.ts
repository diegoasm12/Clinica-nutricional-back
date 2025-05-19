import { Module } from '@nestjs/common';
import { REncuestatendenciaconsumoAlimentoService } from './r-encuestatendenciaconsumo-alimento.service';
import { REncuestatendenciaconsumoAlimentoController } from './r-encuestatendenciaconsumo-alimento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { REncuestatendenciaconsumoAlimento } from './entities/r-encuestatendenciaconsumo-alimento.entity';

@Module({
  imports:[TypeOrmModule.forFeature([REncuestatendenciaconsumoAlimento])],
  controllers: [REncuestatendenciaconsumoAlimentoController],
  providers: [REncuestatendenciaconsumoAlimentoService],
})
export class REncuestatendenciaconsumoAlimentoModule {}

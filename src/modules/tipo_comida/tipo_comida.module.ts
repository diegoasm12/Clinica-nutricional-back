import { Module } from '@nestjs/common';
import { TipoComidaService } from './tipo_comida.service';
import { TipoComidaController } from './tipo_comida.controller';

@Module({
  controllers: [TipoComidaController],
  providers: [TipoComidaService],
})
export class TipoComidaModule {}

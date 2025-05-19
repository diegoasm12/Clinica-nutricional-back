import { Module } from '@nestjs/common';
import { RRegistro24hTipocomidaService } from './r-registro24h-tipocomida.service';
import { RRegistro24hTipocomidaController } from './r-registro24h-tipocomida.controller';

@Module({
  controllers: [RRegistro24hTipocomidaController],
  providers: [RRegistro24hTipocomidaService],
})
export class RRegistro24hTipocomidaModule {}

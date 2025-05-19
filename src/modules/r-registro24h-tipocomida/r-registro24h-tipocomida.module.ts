import { Module } from '@nestjs/common';
import { RRegistro24hTipocomidaService } from './r-registro24h-tipocomida.service';
import { RRegistro24hTipocomidaController } from './r-registro24h-tipocomida.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RRegistro24hTipocomida } from './entities/r-registro24h-tipocomida.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RRegistro24hTipocomida])],
  controllers: [RRegistro24hTipocomidaController],
  providers: [RRegistro24hTipocomidaService],
})
export class RRegistro24hTipocomidaModule {}

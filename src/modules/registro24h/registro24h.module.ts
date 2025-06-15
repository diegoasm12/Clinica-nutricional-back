import { Module } from '@nestjs/common';
import { Registro24hService } from './registro24h.service';
import { Registro24hController } from './registro24h.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registro24h } from './entities/registro24h.entity';
import { RRegistro24hTipocomidaModule } from '../r-registro24h-tipocomida/r-registro24h-tipocomida.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Registro24h]),
    RRegistro24hTipocomidaModule,
  ],
  controllers: [Registro24hController],
  providers: [Registro24hService],
})
export class Registro24hModule {}

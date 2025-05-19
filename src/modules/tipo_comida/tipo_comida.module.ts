import { Module } from '@nestjs/common';
import { TipoComidaService } from './tipo_comida.service';
import { TipoComidaController } from './tipo_comida.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoComida } from './entities/tipo_comida.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TipoComida])],
  controllers: [TipoComidaController],
  providers: [TipoComidaService],
})
export class TipoComidaModule {}

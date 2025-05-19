import { Module } from '@nestjs/common';
import { AlimentoService } from './alimento.service';
import { AlimentoController } from './alimento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alimento } from './entities/alimento.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Alimento])],
  controllers: [AlimentoController],
  providers: [AlimentoService],
})
export class AlimentoModule {}

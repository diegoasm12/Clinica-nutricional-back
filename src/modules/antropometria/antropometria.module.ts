import { Module } from '@nestjs/common';
import { AntropometriaService } from './antropometria.service';
import { AntropometriaController } from './antropometria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Antropometria } from './entities/antropometria.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Antropometria])],
  controllers: [AntropometriaController],
  providers: [AntropometriaService],
})
export class AntropometriaModule {}

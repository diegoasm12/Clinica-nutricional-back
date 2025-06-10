import { Module } from '@nestjs/common';
import { AntropometriaService } from './antropometria.service';
import { AntropometriaController } from './antropometria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Antropometria } from './entities/antropometria.entity';
import { TomaPliegueModule } from '../toma_pliegue/toma_pliegue.module';

@Module({
  imports: [TypeOrmModule.forFeature([Antropometria]), TomaPliegueModule],
  controllers: [AntropometriaController],
  providers: [AntropometriaService],
})
export class AntropometriaModule {}

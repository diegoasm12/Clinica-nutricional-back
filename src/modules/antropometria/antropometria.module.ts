import { Module } from '@nestjs/common';
import { AntropometriaService } from './antropometria.service';
import { AntropometriaController } from './antropometria.controller';

@Module({
  controllers: [AntropometriaController],
  providers: [AntropometriaService],
})
export class AntropometriaModule {}

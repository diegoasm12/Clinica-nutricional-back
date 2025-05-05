import { Module } from '@nestjs/common';
import { AlimentosService } from './alimentos.service';
import { AlimentosController } from './alimentos.controller';

@Module({
  controllers: [AlimentosController],
  providers: [AlimentosService],
})
export class AlimentosModule {}

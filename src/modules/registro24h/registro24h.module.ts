import { Module } from '@nestjs/common';
import { Registro24hService } from './registro24h.service';
import { Registro24hController } from './registro24h.controller';

@Module({
  controllers: [Registro24hController],
  providers: [Registro24hService],
})
export class Registro24hModule {}

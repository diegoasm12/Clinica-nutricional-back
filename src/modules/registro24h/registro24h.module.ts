import { Module } from '@nestjs/common';
import { Registro24hService } from './registro24h.service';
import { Registro24hController } from './registro24h.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registro24h } from './entities/registro24h.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Registro24h])],
  controllers: [Registro24hController],
  providers: [Registro24hService],
})
export class Registro24hModule {}

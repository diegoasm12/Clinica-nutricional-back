import { Module } from '@nestjs/common';
import { HabitoService } from './habito.service';
import { HabitoController } from './habito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habito } from './entities/habito.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Habito])],
  controllers: [HabitoController],
  providers: [HabitoService],
})
export class HabitoModule {}

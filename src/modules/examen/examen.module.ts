import { Module } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { ExamenController } from './examen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Examan } from './entities/examan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Examan])],
  controllers: [ExamenController],
  providers: [ExamenService],
})
export class ExamenModule {}

import { Module } from '@nestjs/common';
import { TomaPliegueService } from './toma_pliegue.service';
import { TomaPliegueController } from './toma_pliegue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TomaPliegue } from './entities/toma_pliegue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TomaPliegue])],
  controllers: [TomaPliegueController],
  providers: [TomaPliegueService],
  exports: [TomaPliegueService],
})
export class TomaPliegueModule {}

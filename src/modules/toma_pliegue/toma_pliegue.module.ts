import { Module } from '@nestjs/common';
import { TomaPliegueService } from './toma_pliegue.service';
import { TomaPliegueController } from './toma_pliegue.controller';

@Module({
  controllers: [TomaPliegueController],
  providers: [TomaPliegueService],
})
export class TomaPliegueModule {}

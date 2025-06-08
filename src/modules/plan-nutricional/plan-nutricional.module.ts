import { Module } from '@nestjs/common';
import { PlanNutricionalService } from './plan-nutricional.service';
import { PlanNutricionalController } from './plan-nutricional.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanNutricional } from './entities/plan-nutricional.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlanNutricional])],
  controllers: [PlanNutricionalController],
  providers: [PlanNutricionalService],
})
export class PlanNutricionalModule {}

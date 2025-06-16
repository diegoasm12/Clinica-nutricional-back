import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlanNutricionalService } from './plan-nutricional.service';
import { CreatePlanNutricionalDto } from './dto/create-plan-nutricional.dto';
import { UpdatePlanNutricionalDto } from './dto/update-plan-nutricional.dto';

@Controller('plan-nutricional')
export class PlanNutricionalController {
  constructor(
    private readonly planNutricionalService: PlanNutricionalService,
  ) {}

  @Post()
  create(@Body() createPlanNutricionalDto: CreatePlanNutricionalDto) {
    return this.planNutricionalService.createPlanNutricional(
      createPlanNutricionalDto,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlanNutricionalDto: UpdatePlanNutricionalDto,
  ) {
    return this.planNutricionalService.updatePlanNutricional(
      +id,
      updatePlanNutricionalDto,
    );
  }
}

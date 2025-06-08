import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanNutricionalService } from './plan-nutricional.service';
import { CreatePlanNutricionalDto } from './dto/create-plan-nutricional.dto';
import { UpdatePlanNutricionalDto } from './dto/update-plan-nutricional.dto';

@Controller('plan-nutricional')
export class PlanNutricionalController {
  constructor(private readonly planNutricionalService: PlanNutricionalService) {}

  @Post()
  create(@Body() createPlanNutricionalDto: CreatePlanNutricionalDto) {
    return this.planNutricionalService.create(createPlanNutricionalDto);
  }

  @Get()
  findAll() {
    return this.planNutricionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planNutricionalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanNutricionalDto: UpdatePlanNutricionalDto) {
    return this.planNutricionalService.update(+id, updatePlanNutricionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planNutricionalService.remove(+id);
  }
}

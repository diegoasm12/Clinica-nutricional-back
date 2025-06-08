import { Injectable } from '@nestjs/common';
import { CreatePlanNutricionalDto } from './dto/create-plan-nutricional.dto';
import { UpdatePlanNutricionalDto } from './dto/update-plan-nutricional.dto';

@Injectable()
export class PlanNutricionalService {
  create(createPlanNutricionalDto: CreatePlanNutricionalDto) {
    return 'This action adds a new planNutricional';
  }

  findAll() {
    return `This action returns all planNutricional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planNutricional`;
  }

  update(id: number, updatePlanNutricionalDto: UpdatePlanNutricionalDto) {
    return `This action updates a #${id} planNutricional`;
  }

  remove(id: number) {
    return `This action removes a #${id} planNutricional`;
  }
}

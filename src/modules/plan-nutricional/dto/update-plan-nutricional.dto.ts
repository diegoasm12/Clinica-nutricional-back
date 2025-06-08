import { PartialType } from '@nestjs/swagger';
import { CreatePlanNutricionalDto } from './create-plan-nutricional.dto';

export class UpdatePlanNutricionalDto extends PartialType(CreatePlanNutricionalDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateAntropometriaDto } from './create-antropometria.dto';

export class UpdateAntropometriaDto extends PartialType(CreateAntropometriaDto) {}

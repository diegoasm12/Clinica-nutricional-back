import { PartialType } from '@nestjs/swagger';
import { CreateAlimentoDto } from './create-alimento.dto';

export class UpdateAlimentoDto extends PartialType(CreateAlimentoDto) {}

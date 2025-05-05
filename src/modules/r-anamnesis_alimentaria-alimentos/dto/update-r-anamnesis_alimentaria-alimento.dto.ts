import { PartialType } from '@nestjs/swagger';
import { CreateRAnamnesisAlimentariaAlimentoDto } from './create-r-anamnesis_alimentaria-alimento.dto';

export class UpdateRAnamnesisAlimentariaAlimentoDto extends PartialType(CreateRAnamnesisAlimentariaAlimentoDto) {}

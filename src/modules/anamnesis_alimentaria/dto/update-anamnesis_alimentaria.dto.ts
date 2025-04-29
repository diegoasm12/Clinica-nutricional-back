import { PartialType } from '@nestjs/swagger';
import { CreateAnamnesisAlimentariaDto } from './create-anamnesis_alimentaria.dto';

export class UpdateAnamnesisAlimentariaDto extends PartialType(CreateAnamnesisAlimentariaDto) {}

import { PartialType } from '@nestjs/swagger';
import { CreateAnamnesisClinicaDto } from './create-anamnesis_clinica.dto';

export class UpdateAnamnesisClinicaDto extends PartialType(CreateAnamnesisClinicaDto) {}

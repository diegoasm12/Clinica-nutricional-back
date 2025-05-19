import { PartialType } from '@nestjs/swagger';
import { CreateHabitoDto } from './create-habito.dto';

export class UpdateHabitoDto extends PartialType(CreateHabitoDto) {}

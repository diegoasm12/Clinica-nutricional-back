import { PartialType } from '@nestjs/swagger';
import { CreateTipoComidaDto } from './create-tipo_comida.dto';

export class UpdateTipoComidaDto extends PartialType(CreateTipoComidaDto) {}

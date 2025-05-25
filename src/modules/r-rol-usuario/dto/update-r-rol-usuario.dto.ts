import { PartialType } from '@nestjs/swagger';
import { CreateRRolUsuarioDto } from './create-r-rol-usuario.dto';

export class UpdateRRolUsuarioDto extends PartialType(CreateRRolUsuarioDto) {}

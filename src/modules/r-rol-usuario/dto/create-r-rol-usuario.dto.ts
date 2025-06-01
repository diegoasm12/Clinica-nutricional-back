import { CreateRRolUsuarioPartialDto } from './create-r-rol-usuario-partial.dto';

export class CreateRRolUsuarioDto extends CreateRRolUsuarioPartialDto {
  fkUsuario_id: number;
}

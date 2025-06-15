import { IsNumber, Min } from 'class-validator';
import { CreateRRolUsuarioPartialDto } from './create-r-rol-usuario-partial.dto';

export class CreateRRolUsuarioDto extends CreateRRolUsuarioPartialDto {
  @IsNumber()
  @Min(1)
  fkUsuario_id: number;
}

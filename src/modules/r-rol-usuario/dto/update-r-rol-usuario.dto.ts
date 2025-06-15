import { IsIn, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class UpdateRRolUsuarioDto {
  @IsIn(['eliminar', 'restaurar'])
  @IsNotEmpty()
  estado: 'eliminar' | 'restaurar';
}

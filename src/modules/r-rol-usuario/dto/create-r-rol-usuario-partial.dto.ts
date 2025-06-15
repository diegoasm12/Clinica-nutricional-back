import { IsNumber, Min } from 'class-validator';

export class CreateRRolUsuarioPartialDto {
  @IsNumber()
  @Min(1)
  fkRol_id: number;
}

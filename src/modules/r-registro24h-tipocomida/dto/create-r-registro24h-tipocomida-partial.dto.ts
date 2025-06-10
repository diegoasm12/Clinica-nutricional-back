import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreateRRegistro24hTipocomidaPartialDto {
  @IsString()
  @MinLength(1)
  descripcion: string;

  @IsString()
  @MinLength(1)
  hora: string;

  @IsNumber()
  @Min(1)
  fkTipoComida_id: number;
}

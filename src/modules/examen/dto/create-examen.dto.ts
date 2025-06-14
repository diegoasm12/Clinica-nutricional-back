import { IsBase64, IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreateExamanDto {
  @IsString()
  @MinLength(1)
  nombreExamen: string;

  @IsString()
  @MinLength(1)
  nombreArchivo: string;

  @IsNumber()
  @Min(1)
  fkFicha_id: number;
}

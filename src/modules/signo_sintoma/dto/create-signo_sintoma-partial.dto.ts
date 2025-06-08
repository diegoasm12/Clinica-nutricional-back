import { IsString, MinLength } from 'class-validator';

export class CreateSignoSintomaPartialDto {
  @IsString()
  @MinLength(1)
  diuresis: string;

  @IsString()
  @MinLength(1)
  apetito: string;

  @IsString()
  @MinLength(1)
  calambre: string;

  @IsString()
  @MinLength(1)
  polidipsia: string;

  @IsString()
  @MinLength(1)
  poliuria: string;

  @IsString()
  @MinLength(1)
  deposicionBristol: string;

  @IsString()
  @MinLength(1)
  tinitus: string;

  @IsString()
  @MinLength(1)
  sudoracionNocturna: string;

  @IsString()
  @MinLength(1)
  polifagia: string;

  @IsString()
  @MinLength(1)
  otro: string;
}

import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateSignoSintomaDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  diuresis?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  apetito?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  calambre?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  polidipsia?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  poliuria?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  deposicionBristol?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  tinitus?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  sudoracionNocturna?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  polifagia?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  otro?: string;
}

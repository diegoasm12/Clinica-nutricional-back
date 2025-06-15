import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateAnamnesisClinicaDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  antecedenteFamiliar?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  patologiaBase?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  medicamento?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  anetecedenteQuirurgico?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  alergia?: string;
}

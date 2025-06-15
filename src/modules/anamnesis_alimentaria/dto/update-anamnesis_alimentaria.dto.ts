import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateAnamnesisAlimentariaDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  alergiaIntolerancia?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  alimentoNoGusta?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  alimentoPreferencia?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  cocinaEnCasa?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  habitualmenteComeEn?: string;
}

import { IsString, MinLength } from 'class-validator';

export class CreateAnamnesisAlimentariaDto {
  @IsString()
  @MinLength(1)
  alergiaIntolerancia: string;

  @IsString()
  @MinLength(1)
  alimentoNoGusta: string;

  @IsString()
  @MinLength(1)
  alimentoPreferencia: string;

  @IsString()
  @MinLength(1)
  cocinaEnCasa: string;

  @IsString()
  @MinLength(1)
  habitualmenteComeEn: string;
}

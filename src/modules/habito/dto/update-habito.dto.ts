import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateHabitoDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  alcohol?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  droga?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  actividadFisica?: string;
}

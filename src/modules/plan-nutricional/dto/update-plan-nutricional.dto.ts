import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdatePlanNutricionalDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  objetivoPlan?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  recomendacionInicial?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  planAlimentario?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  diagnosticoNutricional?: string;
}

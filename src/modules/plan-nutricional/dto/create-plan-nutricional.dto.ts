import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreatePlanNutricionalDto {
  @IsString()
  @MinLength(1)
  objetivoPlan: string;

  @IsString()
  @MinLength(1)
  recomendacionInicial: string;

  @IsString()
  @MinLength(1)
  planAlimentario: string;

  @IsString()
  @MinLength(1)
  diagnosticoNutricional: string;

  @IsNumber()
  @Min(1)
  fkFicha_id: number;
}

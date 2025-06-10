import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreateTomaPlieguePartialDto {
  @IsString()
  @MinLength(1)
  circunferenciaCintura: string;

  @IsString()
  @MinLength(1)
  circunferenciaBraquial: string;

  @IsString()
  @MinLength(1)
  circunferenciaCadera: string;

  @IsString()
  @MinLength(1)
  circunferenciaPantorrilla: string;

  @IsString()
  @MinLength(1)
  pliegueTicipital: string;

  @IsString()
  @MinLength(1)
  pliegueBicipital: string;

  @IsString()
  @MinLength(1)
  pliegueSubescapular: string;

  @IsString()
  @MinLength(1)
  pliegueSuprailiaco: string;

  @IsString()
  @MinLength(1)
  pliegueAbdominal: string;

  @IsString()
  @MinLength(1)
  pliegueMuslo: string;

  @IsString()
  @MinLength(1)
  plieguePantorrilla: string;
}

import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreateREncuestaTendenciaConsumoAlimentoPartialDto {
  @IsString()
  @MinLength(1)
  cuantosDiasSemana?: string;

  @IsNumber()
  @Min(1)
  fkAlimento_id: number;
}

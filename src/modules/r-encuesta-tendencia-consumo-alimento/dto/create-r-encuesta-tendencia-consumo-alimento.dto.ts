import { IsNumber, Min } from 'class-validator';
import { CreateREncuestaTendenciaConsumoAlimentoPartialDto } from './create-r-encuesta-tendencia-consumo-alimento-partial.dto';

export class CreateREncuestaTendenciaConsumoAlimentoDto extends CreateREncuestaTendenciaConsumoAlimentoPartialDto {
  @IsNumber()
  @Min(1)
  fkEncuestaTendenciaConsumo_id: number;
}

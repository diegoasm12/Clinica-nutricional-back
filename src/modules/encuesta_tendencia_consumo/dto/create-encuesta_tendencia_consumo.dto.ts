import { Type } from 'class-transformer';
import { ArrayNotEmpty, ValidateNested } from 'class-validator';
import { CreateREncuestaTendenciaConsumoAlimentoPartialDto } from 'src/modules/r-encuesta-tendencia-consumo-alimento/dto/create-r-encuesta-tendencia-consumo-alimento-partial.dto';

export class CreateEncuestaTendenciaConsumoDto {
  @ValidateNested({ each: true })
  @Type(() => CreateREncuestaTendenciaConsumoAlimentoPartialDto)
  @ArrayNotEmpty()
  rEncuestaTendenciaConsumoAlimentos: CreateREncuestaTendenciaConsumoAlimentoPartialDto[] =
    [];
}

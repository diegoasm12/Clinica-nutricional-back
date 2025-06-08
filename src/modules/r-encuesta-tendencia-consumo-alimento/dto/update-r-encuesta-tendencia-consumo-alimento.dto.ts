import { PartialType } from '@nestjs/swagger';
import { CreateREncuestaTendenciaConsumoAlimentoDto } from './create-r-encuesta-tendencia-consumo-alimento.dto';

export class UpdateREncuestaTendenciaConsumoAlimentoDto extends PartialType(CreateREncuestaTendenciaConsumoAlimentoDto) {}

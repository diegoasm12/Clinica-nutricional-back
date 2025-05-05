import { PartialType } from '@nestjs/swagger';
import { CreateEncuestaTendenciaConsumoDto } from './create-encuesta_tendencia_consumo.dto';

export class UpdateEncuestaTendenciaConsumoDto extends PartialType(CreateEncuestaTendenciaConsumoDto) {}

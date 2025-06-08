import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EncuestaTendenciaConsumoService } from './encuesta_tendencia_consumo.service';
import { CreateEncuestaTendenciaConsumoDto } from './dto/create-encuesta_tendencia_consumo.dto';
import { UpdateEncuestaTendenciaConsumoDto } from './dto/update-encuesta_tendencia_consumo.dto';

@Controller('encuesta-tendencia-consumo')
export class EncuestaTendenciaConsumoController {
  constructor(
    private readonly encuestaTendenciaConsumoService: EncuestaTendenciaConsumoService,
  ) {}
}

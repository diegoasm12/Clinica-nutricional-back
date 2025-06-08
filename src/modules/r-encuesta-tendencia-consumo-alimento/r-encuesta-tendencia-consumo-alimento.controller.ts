import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { REncuestaTendenciaConsumoAlimentoService } from './r-encuesta-tendencia-consumo-alimento.service';
import { CreateREncuestaTendenciaConsumoAlimentoDto } from './dto/create-r-encuesta-tendencia-consumo-alimento.dto';
import { UpdateREncuestaTendenciaConsumoAlimentoDto } from './dto/update-r-encuesta-tendencia-consumo-alimento.dto';

@Controller('r-encuesta-tendencia-consumo-alimento')
export class REncuestaTendenciaConsumoAlimentoController {
  constructor(
    private readonly rEncuestaTendenciaConsumoAlimentoService: REncuestaTendenciaConsumoAlimentoService,
  ) {}
}

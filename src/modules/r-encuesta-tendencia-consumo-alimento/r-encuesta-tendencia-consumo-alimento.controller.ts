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
import { REncuestaTendenciaConsumoAlimento } from './entities/r-encuesta-tendencia-consumo-alimento.entity';

@Controller('r-encuesta-tendencia-consumo-alimento')
export class REncuestaTendenciaConsumoAlimentoController {
  constructor(
    private readonly rEncuestaTendenciaConsumoAlimentoService: REncuestaTendenciaConsumoAlimentoService,
  ) {}

  public async updateREncuestaTendenciaConsumoAlimento(
    @Param('id') id: string,
    @Body()
    updateREncuestaTendenciaConsumoAlimentoDto: UpdateREncuestaTendenciaConsumoAlimentoDto,
  ): Promise<REncuestaTendenciaConsumoAlimento> {
    return this.rEncuestaTendenciaConsumoAlimentoService.updateREncuestaTendenciaConsumoAlimento(
      +id,
      updateREncuestaTendenciaConsumoAlimentoDto,
    );
  }
}

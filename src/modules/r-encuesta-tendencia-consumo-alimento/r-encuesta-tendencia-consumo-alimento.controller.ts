import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { REncuestaTendenciaConsumoAlimentoService } from './r-encuesta-tendencia-consumo-alimento.service';
import { CreateREncuestaTendenciaConsumoAlimentoDto } from './dto/create-r-encuesta-tendencia-consumo-alimento.dto';
import { UpdateREncuestaTendenciaConsumoAlimentoDto } from './dto/update-r-encuesta-tendencia-consumo-alimento.dto';

@Controller('r-encuesta-tendencia-consumo-alimento')
export class REncuestaTendenciaConsumoAlimentoController {
  constructor(private readonly rEncuestaTendenciaConsumoAlimentoService: REncuestaTendenciaConsumoAlimentoService) {}

  @Post()
  create(@Body() createREncuestaTendenciaConsumoAlimentoDto: CreateREncuestaTendenciaConsumoAlimentoDto) {
    return this.rEncuestaTendenciaConsumoAlimentoService.create(createREncuestaTendenciaConsumoAlimentoDto);
  }

  @Get()
  findAll() {
    return this.rEncuestaTendenciaConsumoAlimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rEncuestaTendenciaConsumoAlimentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateREncuestaTendenciaConsumoAlimentoDto: UpdateREncuestaTendenciaConsumoAlimentoDto) {
    return this.rEncuestaTendenciaConsumoAlimentoService.update(+id, updateREncuestaTendenciaConsumoAlimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rEncuestaTendenciaConsumoAlimentoService.remove(+id);
  }
}

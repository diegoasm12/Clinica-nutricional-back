import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncuestaTendenciaConsumoService } from './encuesta_tendencia_consumo.service';
import { CreateEncuestaTendenciaConsumoDto } from './dto/create-encuesta_tendencia_consumo.dto';
import { UpdateEncuestaTendenciaConsumoDto } from './dto/update-encuesta_tendencia_consumo.dto';

@Controller('encuesta-tendencia-consumo')
export class EncuestaTendenciaConsumoController {
  constructor(private readonly encuestaTendenciaConsumoService: EncuestaTendenciaConsumoService) {}

  @Post()
  create(@Body() createEncuestaTendenciaConsumoDto: CreateEncuestaTendenciaConsumoDto) {
    return this.encuestaTendenciaConsumoService.create(createEncuestaTendenciaConsumoDto);
  }

  @Get()
  findAll() {
    return this.encuestaTendenciaConsumoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encuestaTendenciaConsumoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEncuestaTendenciaConsumoDto: UpdateEncuestaTendenciaConsumoDto) {
    return this.encuestaTendenciaConsumoService.update(+id, updateEncuestaTendenciaConsumoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encuestaTendenciaConsumoService.remove(+id);
  }
}

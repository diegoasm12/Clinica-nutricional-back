import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoComidaService } from './tipo_comida.service';
import { CreateTipoComidaDto } from './dto/create-tipo_comida.dto';
import { UpdateTipoComidaDto } from './dto/update-tipo_comida.dto';

@Controller('tipo-comida')
export class TipoComidaController {
  constructor(private readonly tipoComidaService: TipoComidaService) {}

  @Post()
  create(@Body() createTipoComidaDto: CreateTipoComidaDto) {
    return this.tipoComidaService.create(createTipoComidaDto);
  }

  @Get()
  findAll() {
    return this.tipoComidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoComidaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoComidaDto: UpdateTipoComidaDto) {
    return this.tipoComidaService.update(+id, updateTipoComidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoComidaService.remove(+id);
  }
}

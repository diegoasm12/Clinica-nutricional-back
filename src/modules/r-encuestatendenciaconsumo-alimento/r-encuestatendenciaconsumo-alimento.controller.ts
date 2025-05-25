import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { REncuestatendenciaconsumoAlimentoService } from './r-encuestatendenciaconsumo-alimento.service';
import { CreateREncuestatendenciaconsumoAlimentoDto } from './dto/create-r-encuestatendenciaconsumo-alimento.dto';
import { UpdateREncuestatendenciaconsumoAlimentoDto } from './dto/update-r-encuestatendenciaconsumo-alimento.dto';

@Controller('r-encuestatendenciaconsumo-alimento')
export class REncuestatendenciaconsumoAlimentoController {
  constructor(private readonly rEncuestatendenciaconsumoAlimentoService: REncuestatendenciaconsumoAlimentoService) {}

  @Post()
  create(@Body() createREncuestatendenciaconsumoAlimentoDto: CreateREncuestatendenciaconsumoAlimentoDto) {
    return this.rEncuestatendenciaconsumoAlimentoService.create(createREncuestatendenciaconsumoAlimentoDto);
  }

  @Get()
  findAll() {
    return this.rEncuestatendenciaconsumoAlimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rEncuestatendenciaconsumoAlimentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateREncuestatendenciaconsumoAlimentoDto: UpdateREncuestatendenciaconsumoAlimentoDto) {
    return this.rEncuestatendenciaconsumoAlimentoService.update(+id, updateREncuestatendenciaconsumoAlimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rEncuestatendenciaconsumoAlimentoService.remove(+id);
  }
}

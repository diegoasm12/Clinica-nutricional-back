import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RAnamnesisAlimentariaAlimentosService } from './r-anamnesis_alimentaria-alimentos.service';
import { CreateRAnamnesisAlimentariaAlimentoDto } from './dto/create-r-anamnesis_alimentaria-alimento.dto';
import { UpdateRAnamnesisAlimentariaAlimentoDto } from './dto/update-r-anamnesis_alimentaria-alimento.dto';

@Controller('r-anamnesis-alimentaria-alimentos')
export class RAnamnesisAlimentariaAlimentosController {
  constructor(private readonly rAnamnesisAlimentariaAlimentosService: RAnamnesisAlimentariaAlimentosService) {}

  @Post()
  create(@Body() createRAnamnesisAlimentariaAlimentoDto: CreateRAnamnesisAlimentariaAlimentoDto) {
    return this.rAnamnesisAlimentariaAlimentosService.create(createRAnamnesisAlimentariaAlimentoDto);
  }

  @Get()
  findAll() {
    return this.rAnamnesisAlimentariaAlimentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rAnamnesisAlimentariaAlimentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRAnamnesisAlimentariaAlimentoDto: UpdateRAnamnesisAlimentariaAlimentoDto) {
    return this.rAnamnesisAlimentariaAlimentosService.update(+id, updateRAnamnesisAlimentariaAlimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rAnamnesisAlimentariaAlimentosService.remove(+id);
  }
}

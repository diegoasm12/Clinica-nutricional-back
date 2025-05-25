import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AntropometriaService } from './antropometria.service';
import { CreateAntropometriaDto } from './dto/create-antropometria.dto';
import { UpdateAntropometriaDto } from './dto/update-antropometria.dto';

@Controller('antropometria')
export class AntropometriaController {
  constructor(private readonly antropometriaService: AntropometriaService) {}

  @Post()
  create(@Body() createAntropometriaDto: CreateAntropometriaDto) {
    return this.antropometriaService.create(createAntropometriaDto);
  }

  @Get()
  findAll() {
    return this.antropometriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.antropometriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAntropometriaDto: UpdateAntropometriaDto) {
    return this.antropometriaService.update(+id, updateAntropometriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.antropometriaService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { CreateExamanDto } from './dto/create-examen.dto';
import { UpdateExamanDto } from './dto/update-examen.dto';

@Controller('examen')
export class ExamenController {
  constructor(private readonly examenService: ExamenService) {}

  @Post()
  create(@Body() createExamanDto: CreateExamanDto) {
    return this.examenService.create(createExamanDto);
  }

  @Get()
  findAll() {
    return this.examenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamanDto: UpdateExamanDto) {
    return this.examenService.update(+id, updateExamanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenService.remove(+id);
  }
}

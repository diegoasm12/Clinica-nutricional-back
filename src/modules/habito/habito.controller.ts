import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HabitoService } from './habito.service';
import { CreateHabitoDto } from './dto/create-habito.dto';
import { UpdateHabitoDto } from './dto/update-habito.dto';

@Controller('habito')
export class HabitoController {
  constructor(private readonly habitoService: HabitoService) {}

  @Post()
  create(@Body() createHabitoDto: CreateHabitoDto) {
    return this.habitoService.create(createHabitoDto);
  }

  @Get()
  findAll() {
    return this.habitoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.habitoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHabitoDto: UpdateHabitoDto) {
    return this.habitoService.update(+id, updateHabitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.habitoService.remove(+id);
  }
}

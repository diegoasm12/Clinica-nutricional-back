import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnamnesisSocialService } from './anamnesis_social.service';
import { CreateAnamnesisSocialDto } from './dto/create-anamnesis_social.dto';
import { UpdateAnamnesisSocialDto } from './dto/update-anamnesis_social.dto';

@Controller('anamnesis-social')
export class AnamnesisSocialController {
  constructor(private readonly anamnesisSocialService: AnamnesisSocialService) {}

  @Post()
  create(@Body() createAnamnesisSocialDto: CreateAnamnesisSocialDto) {
    return this.anamnesisSocialService.create(createAnamnesisSocialDto);
  }

  @Get()
  findAll() {
    return this.anamnesisSocialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anamnesisSocialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnamnesisSocialDto: UpdateAnamnesisSocialDto) {
    return this.anamnesisSocialService.update(+id, updateAnamnesisSocialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anamnesisSocialService.remove(+id);
  }
}

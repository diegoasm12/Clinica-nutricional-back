import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Registro24hService } from './registro24h.service';
import { CreateRegistro24hDto } from './dto/create-registro24h.dto';
import { UpdateRegistro24hDto } from './dto/update-registro24h.dto';

@Controller('registro24h')
export class Registro24hController {
  constructor(private readonly registro24hService: Registro24hService) {}

  @Post()
  create(@Body() createRegistro24hDto: CreateRegistro24hDto) {
    return this.registro24hService.create(createRegistro24hDto);
  }

  @Get()
  findAll() {
    return this.registro24hService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registro24hService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistro24hDto: UpdateRegistro24hDto) {
    return this.registro24hService.update(+id, updateRegistro24hDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registro24hService.remove(+id);
  }
}

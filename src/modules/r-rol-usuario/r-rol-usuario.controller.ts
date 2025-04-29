import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RRolUsuarioService } from './r-rol-usuario.service';
import { CreateRRolUsuarioDto } from './dto/create-r-rol-usuario.dto';
import { UpdateRRolUsuarioDto } from './dto/update-r-rol-usuario.dto';

@Controller('r-rol-usuario')
export class RRolUsuarioController {
  constructor(private readonly rRolUsuarioService: RRolUsuarioService) {}

  @Post()
  create(@Body() createRRolUsuarioDto: CreateRRolUsuarioDto) {
    return this.rRolUsuarioService.create(createRRolUsuarioDto);
  }

  @Get()
  findAll() {
    return this.rRolUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rRolUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRRolUsuarioDto: UpdateRRolUsuarioDto) {
    return this.rRolUsuarioService.update(+id, updateRRolUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rRolUsuarioService.remove(+id);
  }
}

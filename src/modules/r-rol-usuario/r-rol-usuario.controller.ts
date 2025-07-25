import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RRolUsuarioService } from './r-rol-usuario.service';
import { CreateRRolUsuarioDto } from './dto/create-r-rol-usuario.dto';
import { UpdateRRolUsuarioDto } from './dto/update-r-rol-usuario.dto';

@Controller('r-rol-usuario')
export class RRolUsuarioController {
  constructor(private readonly rRolUsuarioService: RRolUsuarioService) {}

  @Post()
  public async create(@Body() createRRolUsuarioDto: CreateRRolUsuarioDto) {
    return this.rRolUsuarioService.createRRolUsuario(createRRolUsuarioDto);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: number,
    @Body() updateRRolUsuarioDto: UpdateRRolUsuarioDto,
  ) {
    return this.rRolUsuarioService.updateRRolUsuario(id, updateRRolUsuarioDto);
  }
}

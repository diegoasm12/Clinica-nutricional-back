import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { RecoveryPasswordDto } from './dto/recovery-password.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.createUsuario(createUsuarioDto);
  }

  @Post('recovery-password')
  recoveryPassword(@Body() recoveryPasswordDto: RecoveryPasswordDto) {
    return this.usuarioService.recoveryPassword(recoveryPasswordDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.updateUsuario(+id, updateUsuarioDto);
  }

  @Get()
  @ApiQuery({
    name: 'idRol',
    required: false,
    description: 'ID of the role to filter users',
    type: Number,
  })
  findAll(@Query('idRol') idRol?: number) {
    return this.usuarioService.findUsers(idRol);
  }

  @Get(':rut')
  findOne(@Param('rut') rut: number) {
    return this.usuarioService.findUserByRut(rut);
  }
}

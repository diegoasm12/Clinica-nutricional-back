import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { RecoveryPasswordDto } from './dto/recovery-password.dto';

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
}

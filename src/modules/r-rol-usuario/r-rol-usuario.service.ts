import { Injectable } from '@nestjs/common';
import { CreateRRolUsuarioDto } from './dto/create-r-rol-usuario.dto';
import { UpdateRRolUsuarioDto } from './dto/update-r-rol-usuario.dto';

@Injectable()
export class RRolUsuarioService {
  create(createRRolUsuarioDto: CreateRRolUsuarioDto) {
    return 'This action adds a new rRolUsuario';
  }

  findAll() {
    return `This action returns all rRolUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rRolUsuario`;
  }

  update(id: number, updateRRolUsuarioDto: UpdateRRolUsuarioDto) {
    return `This action updates a #${id} rRolUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} rRolUsuario`;
  }
}

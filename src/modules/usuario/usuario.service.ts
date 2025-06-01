import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  public async findUserForLogin(
    rut: number,
    password: string,
  ): Promise<Usuario> {
    const user = await this.usuarioRepository
      .createQueryBuilder('usuario')
      .innerJoinAndSelect('usuario.rRolUsuario', 'rRolUsuario')
      .innerJoinAndSelect('rRolUsuario.fkRol', 'rol')
      .where('usuario.rut = :rut', { rut })
      .andWhere('usuario.clave = :password', { password })
      .getOne();

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}

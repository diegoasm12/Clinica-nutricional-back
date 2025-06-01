import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { RRolUsuarioService } from '../r-rol-usuario/r-rol-usuario.service';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly repository: Repository<Usuario>,
    private readonly rRolUsuarioService: RRolUsuarioService,
  ) {}

  public async findUserForLogin(
    rut: number,
    password: string,
  ): Promise<Usuario> {
    const user = await this.repository
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

  public async createUsuario(dto: CreateUsuarioDto): Promise<Usuario> {
    const clave = Math.random().toString(36).slice(-8); // Genera una clave aleatoria de 8 caracteres
    const usuario = this.repository.create({
      nombre: dto.nombre,
      rut: dto.rut,
      fechaNacimiento: dto.fechaNacimiento,
      telefono: dto.telefono,
      correo: dto.correo,
      sexo: dto.sexo,
      clave: clave,
    });

    const usuarioWhitId = await this.repository.save(usuario);

    await this.rRolUsuarioService.createRRolUsuario({
      fkRol_id: dto.rRolUsuario.fkRol_id,
      fkUsuario_id: usuarioWhitId.id,
    });

    return usuarioWhitId;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateRRolUsuarioDto } from './dto/create-r-rol-usuario.dto';
import { UpdateRRolUsuarioDto } from './dto/update-r-rol-usuario.dto';
import { RRolUsuario } from './entities/r-rol-usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RRolUsuarioService {
  constructor(
    @InjectRepository(RRolUsuario)
    private readonly repository: Repository<RRolUsuario>,
  ) {}

  public async createRRolUsuario(
    dto: CreateRRolUsuarioDto,
  ): Promise<RRolUsuario> {
    const rRolUsuario = this.repository.create({
      fkRol: {
        id: dto.fkRol_id,
      },
      fkUsuario: {
        id: dto.fkUsuario_id,
      },
    });

    return this.repository.save(rRolUsuario);
  }
}

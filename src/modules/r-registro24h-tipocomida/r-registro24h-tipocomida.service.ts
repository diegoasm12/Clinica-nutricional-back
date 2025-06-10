import { Injectable } from '@nestjs/common';
import { CreateRRegistro24hTipocomidaDto } from './dto/create-r-registro24h-tipocomida.dto';
import { UpdateRRegistro24hTipocomidaDto } from './dto/update-r-registro24h-tipocomida.dto';
import { RRegistro24hTipocomida } from './entities/r-registro24h-tipocomida.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RRegistro24hTipocomidaService {
  constructor(
    @InjectRepository(RRegistro24hTipocomida)
    private readonly repository: Repository<RRegistro24hTipocomida>,
  ) {}

  public async createRRegistro24hTipocomida(
    dto: CreateRRegistro24hTipocomidaDto,
  ): Promise<RRegistro24hTipocomida> {
    const rRegistro24hTipocomida: RRegistro24hTipocomida =
      this.repository.create({
        fkTipoComida: {
          id: dto.fkTipoComida_id,
        },
        fkRegistro24h: {
          id: dto.fkRegistro24h_id,
        },
        hora: dto.hora,
        descripcion: dto.descripcion,
      });

    return await this.repository.save(rRegistro24hTipocomida);
  }
}

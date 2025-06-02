import { Injectable } from '@nestjs/common';
import { CreateTipoComidaDto } from './dto/create-tipo_comida.dto';
import { UpdateTipoComidaDto } from './dto/update-tipo_comida.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoComida } from './entities/tipo_comida.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoComidaService {
  constructor(
    @InjectRepository(TipoComida)
    private readonly tipocomidaRepository: Repository<TipoComida>,
  ) {}

  public async findTipoComida(): Promise<TipoComida[]> {
    return this.tipocomidaRepository.createQueryBuilder('tipoComida').getMany();
  }
}

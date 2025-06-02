import { Injectable } from '@nestjs/common';
import { CreateAlimentoDto } from './dto/create-alimento.dto';
import { UpdateAlimentoDto } from './dto/update-alimento.dto';
import { Alimento } from './entities/alimento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AlimentoService {
  constructor(
    @InjectRepository(Alimento)
    private readonly alimentoRepository: Repository<Alimento>,
  ) {}

  public async findTipoAlimento(): Promise<Alimento[]> {
    return this.alimentoRepository.createQueryBuilder('alimento').getMany();
  }
}

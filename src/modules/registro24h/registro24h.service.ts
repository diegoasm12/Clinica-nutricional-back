import { Injectable } from '@nestjs/common';
import { CreateRegistro24hDto } from './dto/create-registro24h.dto';
import { UpdateRegistro24hDto } from './dto/update-registro24h.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Registro24h } from './entities/registro24h.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Registro24hService {
  constructor(
    @InjectRepository(Registro24h)
    private readonly repository: Repository<Registro24h>,
  ) {}

  public async createRegistro24h(
    createRegistro24hDto: CreateRegistro24hDto,
  ): Promise<Registro24h> {
    const registro24h = this.repository.create({
      fkFicha: {
        id: createRegistro24hDto.fkFicha_id,
      },
      fechaCreacion: new Date(),
    });
    return await this.repository.save(registro24h);
  }
}

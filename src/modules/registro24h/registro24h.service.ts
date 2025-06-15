import { Injectable } from '@nestjs/common';
import { CreateRegistro24hDto } from './dto/create-registro24h.dto';
import { UpdateRegistro24hDto } from './dto/update-registro24h.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Registro24h } from './entities/registro24h.entity';
import { Repository } from 'typeorm';
import { RRegistro24hTipocomidaService } from '../r-registro24h-tipocomida/r-registro24h-tipocomida.service';

@Injectable()
export class Registro24hService {
  constructor(
    @InjectRepository(Registro24h)
    private readonly repository: Repository<Registro24h>,
    private readonly rRegistro24hTipocomidaService: RRegistro24hTipocomidaService,
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
    const registro24hWhitId = await this.repository.save(registro24h);

    for (const rRegistro24hTipocomida of createRegistro24hDto.rRegistro24hTipocomidas) {
      await this.rRegistro24hTipocomidaService.createRRegistro24hTipocomida({
        descripcion: rRegistro24hTipocomida.descripcion,
        fkRegistro24h_id: registro24hWhitId.id,
        fkTipoComida_id: rRegistro24hTipocomida.fkTipoComida_id,
        hora: rRegistro24hTipocomida.hora,
      });
    }

    return registro24hWhitId;
  }
}

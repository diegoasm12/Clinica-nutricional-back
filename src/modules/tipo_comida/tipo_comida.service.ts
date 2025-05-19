import { Injectable } from '@nestjs/common';
import { CreateTipoComidaDto } from './dto/create-tipo_comida.dto';
import { UpdateTipoComidaDto } from './dto/update-tipo_comida.dto';

@Injectable()
export class TipoComidaService {
  create(createTipoComidaDto: CreateTipoComidaDto) {
    return 'This action adds a new tipoComida';
  }

  findAll() {
    return `This action returns all tipoComida`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoComida`;
  }

  update(id: number, updateTipoComidaDto: UpdateTipoComidaDto) {
    return `This action updates a #${id} tipoComida`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoComida`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateRRegistro24hTipocomidaDto } from './dto/create-r-registro24h-tipocomida.dto';
import { UpdateRRegistro24hTipocomidaDto } from './dto/update-r-registro24h-tipocomida.dto';

@Injectable()
export class RRegistro24hTipocomidaService {
  create(createRRegistro24hTipocomidaDto: CreateRRegistro24hTipocomidaDto) {
    return 'This action adds a new rRegistro24hTipocomida';
  }

  findAll() {
    return `This action returns all rRegistro24hTipocomida`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rRegistro24hTipocomida`;
  }

  update(id: number, updateRRegistro24hTipocomidaDto: UpdateRRegistro24hTipocomidaDto) {
    return `This action updates a #${id} rRegistro24hTipocomida`;
  }

  remove(id: number) {
    return `This action removes a #${id} rRegistro24hTipocomida`;
  }
}

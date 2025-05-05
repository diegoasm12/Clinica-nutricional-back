import { Injectable } from '@nestjs/common';
import { CreateRAnamnesisAlimentariaAlimentoDto } from './dto/create-r-anamnesis_alimentaria-alimento.dto';
import { UpdateRAnamnesisAlimentariaAlimentoDto } from './dto/update-r-anamnesis_alimentaria-alimento.dto';

@Injectable()
export class RAnamnesisAlimentariaAlimentosService {
  create(createRAnamnesisAlimentariaAlimentoDto: CreateRAnamnesisAlimentariaAlimentoDto) {
    return 'This action adds a new rAnamnesisAlimentariaAlimento';
  }

  findAll() {
    return `This action returns all rAnamnesisAlimentariaAlimentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rAnamnesisAlimentariaAlimento`;
  }

  update(id: number, updateRAnamnesisAlimentariaAlimentoDto: UpdateRAnamnesisAlimentariaAlimentoDto) {
    return `This action updates a #${id} rAnamnesisAlimentariaAlimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} rAnamnesisAlimentariaAlimento`;
  }
}

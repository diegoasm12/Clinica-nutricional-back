import { Injectable } from '@nestjs/common';
import { CreateAnamnesisAlimentariaDto } from './dto/create-anamnesis_alimentaria.dto';
import { UpdateAnamnesisAlimentariaDto } from './dto/update-anamnesis_alimentaria.dto';

@Injectable()
export class AnamnesisAlimentariaService {
  create(createAnamnesisAlimentariaDto: CreateAnamnesisAlimentariaDto) {
    return 'This action adds a new anamnesisAlimentaria';
  }

  findAll() {
    return `This action returns all anamnesisAlimentaria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anamnesisAlimentaria`;
  }

  update(id: number, updateAnamnesisAlimentariaDto: UpdateAnamnesisAlimentariaDto) {
    return `This action updates a #${id} anamnesisAlimentaria`;
  }

  remove(id: number) {
    return `This action removes a #${id} anamnesisAlimentaria`;
  }
}

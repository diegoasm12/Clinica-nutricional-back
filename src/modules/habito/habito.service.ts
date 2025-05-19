import { Injectable } from '@nestjs/common';
import { CreateHabitoDto } from './dto/create-habito.dto';
import { UpdateHabitoDto } from './dto/update-habito.dto';

@Injectable()
export class HabitoService {
  create(createHabitoDto: CreateHabitoDto) {
    return 'This action adds a new habito';
  }

  findAll() {
    return `This action returns all habito`;
  }

  findOne(id: number) {
    return `This action returns a #${id} habito`;
  }

  update(id: number, updateHabitoDto: UpdateHabitoDto) {
    return `This action updates a #${id} habito`;
  }

  remove(id: number) {
    return `This action removes a #${id} habito`;
  }
}

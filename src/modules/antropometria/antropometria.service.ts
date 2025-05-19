import { Injectable } from '@nestjs/common';
import { CreateAntropometriaDto } from './dto/create-antropometria.dto';
import { UpdateAntropometriaDto } from './dto/update-antropometria.dto';

@Injectable()
export class AntropometriaService {
  create(createAntropometriaDto: CreateAntropometriaDto) {
    return 'This action adds a new antropometria';
  }

  findAll() {
    return `This action returns all antropometria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} antropometria`;
  }

  update(id: number, updateAntropometriaDto: UpdateAntropometriaDto) {
    return `This action updates a #${id} antropometria`;
  }

  remove(id: number) {
    return `This action removes a #${id} antropometria`;
  }
}

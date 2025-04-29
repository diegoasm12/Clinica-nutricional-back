import { Injectable } from '@nestjs/common';
import { CreateAnamnesisSocialDto } from './dto/create-anamnesis_social.dto';
import { UpdateAnamnesisSocialDto } from './dto/update-anamnesis_social.dto';

@Injectable()
export class AnamnesisSocialService {
  create(createAnamnesisSocialDto: CreateAnamnesisSocialDto) {
    return 'This action adds a new anamnesisSocial';
  }

  findAll() {
    return `This action returns all anamnesisSocial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anamnesisSocial`;
  }

  update(id: number, updateAnamnesisSocialDto: UpdateAnamnesisSocialDto) {
    return `This action updates a #${id} anamnesisSocial`;
  }

  remove(id: number) {
    return `This action removes a #${id} anamnesisSocial`;
  }
}

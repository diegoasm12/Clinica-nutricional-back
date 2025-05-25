import { Injectable } from '@nestjs/common';
import { CreateTomaPliegueDto } from './dto/create-toma_pliegue.dto';
import { UpdateTomaPliegueDto } from './dto/update-toma_pliegue.dto';

@Injectable()
export class TomaPliegueService {
  create(createTomaPliegueDto: CreateTomaPliegueDto) {
    return 'This action adds a new tomaPliegue';
  }

  findAll() {
    return `This action returns all tomaPliegue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tomaPliegue`;
  }

  update(id: number, updateTomaPliegueDto: UpdateTomaPliegueDto) {
    return `This action updates a #${id} tomaPliegue`;
  }

  remove(id: number) {
    return `This action removes a #${id} tomaPliegue`;
  }
}

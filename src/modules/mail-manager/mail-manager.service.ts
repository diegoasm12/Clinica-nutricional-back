import { Injectable } from '@nestjs/common';
import { CreateMailManagerDto } from './dto/create-mail-manager.dto';
import { UpdateMailManagerDto } from './dto/update-mail-manager.dto';

@Injectable()
export class MailManagerService {
  create(createMailManagerDto: CreateMailManagerDto) {
    return 'This action adds a new mailManager';
  }

  findAll() {
    return `This action returns all mailManager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailManager`;
  }

  update(id: number, updateMailManagerDto: UpdateMailManagerDto) {
    return `This action updates a #${id} mailManager`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailManager`;
  }
}

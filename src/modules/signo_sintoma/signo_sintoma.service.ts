import { Injectable } from '@nestjs/common';
import { CreateSignoSintomaDto } from './dto/create-signo_sintoma.dto';
import { UpdateSignoSintomaDto } from './dto/update-signo_sintoma.dto';

@Injectable()
export class SignoSintomaService {
  create(createSignoSintomaDto: CreateSignoSintomaDto) {
    return 'This action adds a new signoSintoma';
  }

  findAll() {
    return `This action returns all signoSintoma`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signoSintoma`;
  }

  update(id: number, updateSignoSintomaDto: UpdateSignoSintomaDto) {
    return `This action updates a #${id} signoSintoma`;
  }

  remove(id: number) {
    return `This action removes a #${id} signoSintoma`;
  }
}

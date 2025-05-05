import { Injectable } from '@nestjs/common';
import { CreateRegistro24hDto } from './dto/create-registro24h.dto';
import { UpdateRegistro24hDto } from './dto/update-registro24h.dto';

@Injectable()
export class Registro24hService {
  create(createRegistro24hDto: CreateRegistro24hDto) {
    return 'This action adds a new registro24h';
  }

  findAll() {
    return `This action returns all registro24h`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registro24h`;
  }

  update(id: number, updateRegistro24hDto: UpdateRegistro24hDto) {
    return `This action updates a #${id} registro24h`;
  }

  remove(id: number) {
    return `This action removes a #${id} registro24h`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateEncuestaTendenciaConsumoDto } from './dto/create-encuesta_tendencia_consumo.dto';
import { UpdateEncuestaTendenciaConsumoDto } from './dto/update-encuesta_tendencia_consumo.dto';

@Injectable()
export class EncuestaTendenciaConsumoService {
  create(createEncuestaTendenciaConsumoDto: CreateEncuestaTendenciaConsumoDto) {
    return 'This action adds a new encuestaTendenciaConsumo';
  }

  findAll() {
    return `This action returns all encuestaTendenciaConsumo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} encuestaTendenciaConsumo`;
  }

  update(id: number, updateEncuestaTendenciaConsumoDto: UpdateEncuestaTendenciaConsumoDto) {
    return `This action updates a #${id} encuestaTendenciaConsumo`;
  }

  remove(id: number) {
    return `This action removes a #${id} encuestaTendenciaConsumo`;
  }
}

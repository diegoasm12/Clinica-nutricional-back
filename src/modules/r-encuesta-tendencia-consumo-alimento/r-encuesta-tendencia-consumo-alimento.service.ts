import { Injectable } from '@nestjs/common';
import { CreateREncuestaTendenciaConsumoAlimentoDto } from './dto/create-r-encuesta-tendencia-consumo-alimento.dto';
import { UpdateREncuestaTendenciaConsumoAlimentoDto } from './dto/update-r-encuesta-tendencia-consumo-alimento.dto';

@Injectable()
export class REncuestaTendenciaConsumoAlimentoService {
  create(createREncuestaTendenciaConsumoAlimentoDto: CreateREncuestaTendenciaConsumoAlimentoDto) {
    return 'This action adds a new rEncuestaTendenciaConsumoAlimento';
  }

  findAll() {
    return `This action returns all rEncuestaTendenciaConsumoAlimento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rEncuestaTendenciaConsumoAlimento`;
  }

  update(id: number, updateREncuestaTendenciaConsumoAlimentoDto: UpdateREncuestaTendenciaConsumoAlimentoDto) {
    return `This action updates a #${id} rEncuestaTendenciaConsumoAlimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} rEncuestaTendenciaConsumoAlimento`;
  }
}

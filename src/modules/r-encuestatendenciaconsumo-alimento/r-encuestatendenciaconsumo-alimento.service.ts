import { Injectable } from '@nestjs/common';
import { CreateREncuestatendenciaconsumoAlimentoDto } from './dto/create-r-encuestatendenciaconsumo-alimento.dto';
import { UpdateREncuestatendenciaconsumoAlimentoDto } from './dto/update-r-encuestatendenciaconsumo-alimento.dto';

@Injectable()
export class REncuestatendenciaconsumoAlimentoService {
  create(createREncuestatendenciaconsumoAlimentoDto: CreateREncuestatendenciaconsumoAlimentoDto) {
    return 'This action adds a new rEncuestatendenciaconsumoAlimento';
  }

  findAll() {
    return `This action returns all rEncuestatendenciaconsumoAlimento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rEncuestatendenciaconsumoAlimento`;
  }

  update(id: number, updateREncuestatendenciaconsumoAlimentoDto: UpdateREncuestatendenciaconsumoAlimentoDto) {
    return `This action updates a #${id} rEncuestatendenciaconsumoAlimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} rEncuestatendenciaconsumoAlimento`;
  }
}

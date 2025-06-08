import { Injectable } from '@nestjs/common';
import { CreateREncuestaTendenciaConsumoAlimentoDto } from './dto/create-r-encuesta-tendencia-consumo-alimento.dto';
import { UpdateREncuestaTendenciaConsumoAlimentoDto } from './dto/update-r-encuesta-tendencia-consumo-alimento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { REncuestaTendenciaConsumoAlimento } from './entities/r-encuesta-tendencia-consumo-alimento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class REncuestaTendenciaConsumoAlimentoService {
  constructor(
    @InjectRepository(REncuestaTendenciaConsumoAlimento)
    private readonly repository: Repository<REncuestaTendenciaConsumoAlimento>,
  ) {}

  public async createREncuestaTendenciaConsumoAlimento(
    createREncuestaTendenciaConsumoAlimentoDto: CreateREncuestaTendenciaConsumoAlimentoDto,
  ): Promise<REncuestaTendenciaConsumoAlimento> {
    const rEncuestaTendenciaConsumoAlimento = this.repository.create({
      cuantosDiasSemana:
        createREncuestaTendenciaConsumoAlimentoDto.cuantosDiasSemana,
      fkAlimento: {
        id: createREncuestaTendenciaConsumoAlimentoDto.fkAlimento_id,
      },
      fkEncuestaTendenciaConsumo: {
        id: createREncuestaTendenciaConsumoAlimentoDto.fkEncuestaTendenciaConsumo_id,
      },
    });

    return this.repository.save(rEncuestaTendenciaConsumoAlimento);
  }
}

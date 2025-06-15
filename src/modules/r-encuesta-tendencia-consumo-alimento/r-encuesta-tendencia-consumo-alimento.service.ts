import { Injectable } from '@nestjs/common';
import { CreateREncuestaTendenciaConsumoAlimentoDto } from './dto/create-r-encuesta-tendencia-consumo-alimento.dto';
import { UpdateREncuestaTendenciaConsumoAlimentoDto } from './dto/update-r-encuesta-tendencia-consumo-alimento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { REncuestaTendenciaConsumoAlimento } from './entities/r-encuesta-tendencia-consumo-alimento.entity';
import { Repository } from 'typeorm';
import e from 'express';

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

  public async updateREncuestaTendenciaConsumoAlimento(
    id: number,
    updateREncuestaTendenciaConsumoAlimentoDto: UpdateREncuestaTendenciaConsumoAlimentoDto,
  ): Promise<REncuestaTendenciaConsumoAlimento> {
    const rEncuestaTendenciaConsumoAlimento = await this.repository
      .createQueryBuilder('rEncuestaTendenciaConsumoAlimento')
      .where('rEncuestaTendenciaConsumoAlimento.id = :id', { id })
      .getOne();

    if (!rEncuestaTendenciaConsumoAlimento) {
      throw new Error('Encuesta Tendencia Consumo Alimento not found');
    }

    let fechaEliminacion: Date | null | undefined = undefined;

    if (updateREncuestaTendenciaConsumoAlimentoDto.estado === 'eliminar') {
      fechaEliminacion = new Date();
    } else if (
      updateREncuestaTendenciaConsumoAlimentoDto.estado === 'restaurar'
    ) {
      fechaEliminacion = null;
    }

    const updatedREncuestaTendenciaConsumoAlimento = this.repository.create({
      cuantosDiasSemana:
        updateREncuestaTendenciaConsumoAlimentoDto.cuantosDiasSemana,
      fkAlimento: {
        id: updateREncuestaTendenciaConsumoAlimentoDto.fkAlimento_id,
      },
      fechaEliminacion: fechaEliminacion,
    });

    return this.repository.save(updatedREncuestaTendenciaConsumoAlimento);
  }
}

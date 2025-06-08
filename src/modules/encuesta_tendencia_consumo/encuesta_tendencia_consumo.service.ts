import { Injectable } from '@nestjs/common';
import { CreateEncuestaTendenciaConsumoDto } from './dto/create-encuesta_tendencia_consumo.dto';
import { UpdateEncuestaTendenciaConsumoDto } from './dto/update-encuesta_tendencia_consumo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { REncuestaTendenciaConsumoAlimentoService } from '../r-encuesta-tendencia-consumo-alimento/r-encuesta-tendencia-consumo-alimento.service';
import { EncuestaTendenciaConsumo } from './entities/encuesta_tendencia_consumo.entity';

@Injectable()
export class EncuestaTendenciaConsumoService {
  constructor(
    @InjectRepository(EncuestaTendenciaConsumo)
    private readonly repository: Repository<EncuestaTendenciaConsumo>,
    private readonly rEncuestaTendenciaConsumoAlimentoService: REncuestaTendenciaConsumoAlimentoService,
  ) {}

  public async createEncuestaTendenciaConsumo(
    dto: CreateEncuestaTendenciaConsumoDto,
  ): Promise<EncuestaTendenciaConsumo> {
    const encuestaTendenciaConsumo = this.repository.create({});

    const encuestaTendenciaConsumoWhithId = await this.repository.save(
      encuestaTendenciaConsumo,
    );

    for (const item of dto.rEncuestaTendenciaConsumoAlimentos) {
      await this.rEncuestaTendenciaConsumoAlimentoService.createREncuestaTendenciaConsumoAlimento(
        {
          cuantosDiasSemana: item.cuantosDiasSemana,
          fkAlimento_id: item.fkAlimento_id,
          fkEncuestaTendenciaConsumo_id: encuestaTendenciaConsumoWhithId.id,
        },
      );
    }

    return encuestaTendenciaConsumoWhithId;
  }
}

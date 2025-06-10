import { Injectable } from '@nestjs/common';
import { CreateAntropometriaDto } from './dto/create-antropometria.dto';
import { UpdateAntropometriaDto } from './dto/update-antropometria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Antropometria } from './entities/antropometria.entity';
import { Repository } from 'typeorm';
import { TomaPliegueService } from '../toma_pliegue/toma_pliegue.service';

@Injectable()
export class AntropometriaService {
  constructor(
    @InjectRepository(Antropometria)
    private readonly repository: Repository<Antropometria>,
    private readonly tomaPliegueService: TomaPliegueService,
  ) {}

  public async createAntropometria(
    dto: CreateAntropometriaDto,
  ): Promise<Antropometria> {
    const antropometria: Antropometria = this.repository.create({
      fechaCreacion: new Date(),
      fkFicha: {
        id: dto.fkFicha_id,
      },
      imc: dto.imc,
      peso: dto.peso,
      talla: dto.talla,
    });

    const antropometriaWithId = await this.repository.save(antropometria);

    await this.tomaPliegueService.createTomaPliegue({
      circunferenciaBraquial: dto.tomaPliegue.circunferenciaBraquial,
      circunferenciaCadera: dto.tomaPliegue.circunferenciaCadera,
      circunferenciaCintura: dto.tomaPliegue.circunferenciaCintura,
      circunferenciaPantorrilla: dto.tomaPliegue.circunferenciaPantorrilla,
      pliegueAbdominal: dto.tomaPliegue.pliegueAbdominal,
      pliegueBicipital: dto.tomaPliegue.pliegueBicipital,
      pliegueMuslo: dto.tomaPliegue.pliegueMuslo,
      plieguePantorrilla: dto.tomaPliegue.plieguePantorrilla,
      pliegueSubescapular: dto.tomaPliegue.pliegueSubescapular,
      pliegueSuprailiaco: dto.tomaPliegue.pliegueSuprailiaco,
      pliegueTicipital: dto.tomaPliegue.pliegueTicipital,
      fkAntropometria_id: antropometriaWithId.id,
    });

    return antropometriaWithId;
  }
}

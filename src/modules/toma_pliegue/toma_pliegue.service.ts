import { Injectable } from '@nestjs/common';
import { CreateTomaPliegueDto } from './dto/create-toma_pliegue.dto';
import { UpdateTomaPliegueDto } from './dto/update-toma_pliegue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TomaPliegue } from './entities/toma_pliegue.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TomaPliegueService {
  constructor(
    @InjectRepository(TomaPliegue)
    private readonly repository: Repository<TomaPliegue>,
  ) {}

  public async createTomaPliegue(
    dto: CreateTomaPliegueDto,
  ): Promise<TomaPliegue> {
    const tomaPliegue: TomaPliegue = this.repository.create({
      circunferenciaBraquial: dto.circunferenciaBraquial,
      circunferenciaCadera: dto.circunferenciaCadera,
      circunferenciaCintura: dto.circunferenciaCintura,
      circunferenciaPantorrilla: dto.circunferenciaPantorrilla,
      pliegueAbdominal: dto.pliegueAbdominal,
      pliegueBicipital: dto.pliegueBicipital,
      pliegueMuslo: dto.pliegueMuslo,
      plieguePantorrilla: dto.plieguePantorrilla,
      pliegueSubescapular: dto.pliegueSubescapular,
      pliegueSuprailiaco: dto.pliegueSuprailiaco,
      pliegueTicipital: dto.pliegueTicipital,
      fkAntropometria: {
        id: dto.fkAntropometria_id,
      },
      fechaCreacion: new Date(),
    });

    const tomaPliegueWithId = await this.repository.save(tomaPliegue);
    return tomaPliegueWithId;
  }
}

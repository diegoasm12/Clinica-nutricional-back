import { Injectable } from '@nestjs/common';
import { CreateHabitoDto } from './dto/create-habito.dto';
import { UpdateHabitoDto } from './dto/update-habito.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Habito } from './entities/habito.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HabitoService {
  constructor(
    @InjectRepository(Habito)
    private readonly repository: Repository<Habito>,
  ) {}
  public async createHabito(createHabitoDto: CreateHabitoDto): Promise<Habito> {
    const habito = this.repository.create({
      actividadFisica: createHabitoDto.actividadFisica,
      alcohol: createHabitoDto.alcohol,
      droga: createHabitoDto.droga,
      fkAnamnesisClinica: {
        id: createHabitoDto.fkAnamnesisClinica_id,
      },
    });

    return this.repository.save(habito);
  }

  public async updateHabito(
    id: number,
    updateHabitoDto: UpdateHabitoDto,
  ): Promise<Habito> {
    const habito = await this.repository
      .createQueryBuilder('habito')
      .where('habito.id = :id', { id })
      .getOne();

    if (!habito) {
      throw new Error('Habito not found');
    }

    const updatedHabito = this.repository.create({
      actividadFisica: updateHabitoDto.actividadFisica,
      alcohol: updateHabitoDto.alcohol,
      droga: updateHabitoDto.droga,
    });

    return this.repository.save(updatedHabito);
  }
}

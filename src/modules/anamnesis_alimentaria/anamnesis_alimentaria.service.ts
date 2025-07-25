import { Injectable } from '@nestjs/common';
import { CreateAnamnesisAlimentariaDto } from './dto/create-anamnesis_alimentaria.dto';
import { UpdateAnamnesisAlimentariaDto } from './dto/update-anamnesis_alimentaria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AnamnesisAlimentaria } from './entities/anamnesis_alimentaria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnamnesisAlimentariaService {
  constructor(
    @InjectRepository(AnamnesisAlimentaria)
    private readonly repository: Repository<AnamnesisAlimentaria>,
  ) {}

  public async createAnamnesisAlimentaria(
    dto: CreateAnamnesisAlimentariaDto,
  ): Promise<AnamnesisAlimentaria> {
    const anamnesisAlimentaria = this.repository.create({
      alergiaIntolerancia: dto.alergiaIntolerancia,
      alimentoNoGusta: dto.alimentoNoGusta,
      alimentoPreferencia: dto.alimentoPreferencia,
      cocinaEnCasa: dto.cocinaEnCasa,
      habitualmenteComeEn: dto.habitualmenteComeEn,
    });
    return this.repository.save(anamnesisAlimentaria);
  }

  public async updateAnamnesisAlimentaria(
    id: number,
    dto: UpdateAnamnesisAlimentariaDto,
  ): Promise<AnamnesisAlimentaria> {
    const anamnesisAlimentaria = await this.repository
      .createQueryBuilder('anamnesisAlimentaria')
      .where('anamnesisAlimentaria.id = :id', { id })
      .getOne();

    if (!anamnesisAlimentaria) {
      throw new Error('Anamnesis Alimentaria not found');
    }

    const updatedAnamnesisAlimentaria = this.repository.merge(
      anamnesisAlimentaria,
      {
        alergiaIntolerancia: dto.alergiaIntolerancia,
        alimentoNoGusta: dto.alimentoNoGusta,
        alimentoPreferencia: dto.alimentoPreferencia,
        cocinaEnCasa: dto.cocinaEnCasa,
        habitualmenteComeEn: dto.habitualmenteComeEn,
      },
    );

    return this.repository.save(updatedAnamnesisAlimentaria);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateAnamnesisSocialDto } from './dto/create-anamnesis_social.dto';
import { UpdateAnamnesisSocialDto } from './dto/update-anamnesis_social.dto';
import { AnamnesisSocial } from './entities/anamnesis_social.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AnamnesisSocialService {
  constructor(
    @InjectRepository(AnamnesisSocial)
    private readonly repository: Repository<AnamnesisSocial>,
  ) {}

  public async createAnamnesisSocial(
    createAnamnesisSocialDto: CreateAnamnesisSocialDto,
  ): Promise<AnamnesisSocial> {
    const anamnesisSocial = this.repository.create({
      asisteCon: createAnamnesisSocialDto.asisteCon,
      hijos: createAnamnesisSocialDto.hijos,
      viveCon: createAnamnesisSocialDto.viveCon,
      ocupacion: createAnamnesisSocialDto.ocupacion,
      escolaridad: createAnamnesisSocialDto.escolaridad,
      redesDeApoyo: createAnamnesisSocialDto.redesDeApoyo,
      serviciosBasicos: createAnamnesisSocialDto.serviciosBasicos,
    });

    return this.repository.save(anamnesisSocial);
  }
}

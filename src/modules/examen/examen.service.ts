import { Injectable } from '@nestjs/common';
import { CreateExamanDto } from './dto/create-examen.dto';
import { UpdateExamanDto } from './dto/update-examen.dto';
import { Examen } from './entities/examen.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ExamenService {
  constructor(
    @InjectRepository(Examen)
    private readonly alimentoRepository: Repository<Examen>,
  ) {}

  public async createExamen(createExamanDto: CreateExamanDto): Promise<Examen> {
    const examen = this.alimentoRepository.create({
      fkFicha: {
        id: createExamanDto.fkFicha_id,
      },
      nombreArchivo: createExamanDto.nombreArchivo,
      nombreExamen: createExamanDto.nombreExamen,
    });

    return this.alimentoRepository.save(examen);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';
import { Ficha } from './entities/ficha.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FichaService {
  constructor(
    @InjectRepository(Ficha)
    private readonly repository: Repository<Ficha>,
  ) {}

  public async createFicha(createFichaDto: CreateFichaDto): Promise<Ficha> {
    const ficha = this.repository.create({
      fechaCreacion: new Date(),
      fkAnamnesisAlimentaria: {
        id: createFichaDto.fkAnamnesisAlimentaria_id,
      },
      fkAnamnesisClinica: {
        id: createFichaDto.fkAnamnesisClinica_id,
      },
      fkAnamnesisSocial: {
        id: createFichaDto.fkAnamnesisSocial_id,
      },
      fkEncuestaTendenciaConsumo: {
        id: createFichaDto.fkEncuestaTendenciaConsumo_id,
      },
      fkUsuario: {
        id: createFichaDto.fkUsuario_id,
      },
    });

    return this.repository.save(ficha);
  }

  public async findFichas(): Promise<Ficha[]> {
    return this.repository
      .createQueryBuilder('ficha')
      .leftJoinAndSelect('ficha.fkUsuario', 'usuario')
      .leftJoinAndSelect('ficha.fkAnamnesisSocial', 'anamnesisSocial')
      .leftJoinAndSelect('ficha.fkAnamnesisClinica', 'anamnesisClinica')
      .leftJoinAndSelect('ficha.fkAnamnesisAlimentaria', 'anamnesisAlimentaria')
      .leftJoinAndSelect(
        'ficha.fkEncuestaTendenciaConsumo',
        'encuestaTendenciaConsumo',
      )
      .leftJoinAndSelect('ficha.antropometrias', 'antropometria')
      .leftJoinAndSelect('antropometria.tomasPliegues', 'tomaPliegue')
      .leftJoinAndSelect('ficha.registros24h', 'registro24h')
      .leftJoinAndSelect(
        'registro24h.rRegistro24hTipocomidas',
        'rRegistro24hTipocomidas',
      )
      .leftJoinAndSelect('rRegistro24hTipocomidas.fkTipoComida', 'tipoComida')
      .leftJoinAndSelect('ficha.planesNutricionales', 'planNutricional')
      .leftJoinAndSelect('ficha.examenes', 'examen')
      .getMany();
  }

  public async findFichaByRut(rut: number): Promise<Ficha> {
    const ficha: Ficha | null = await this.repository
      .createQueryBuilder('ficha')
      .leftJoinAndSelect('ficha.fkUsuario', 'usuario')
      .leftJoinAndSelect('ficha.fkAnamnesisSocial', 'anamnesisSocial')
      .leftJoinAndSelect('ficha.fkAnamnesisClinica', 'anamnesisClinica')
      .leftJoinAndSelect('ficha.fkAnamnesisAlimentaria', 'anamnesisAlimentaria')
      .leftJoinAndSelect(
        'ficha.fkEncuestaTendenciaConsumo',
        'encuestaTendenciaConsumo',
      )
      .leftJoinAndSelect('ficha.antropometrias', 'antropometria')
      .leftJoinAndSelect('antropometria.tomasPliegues', 'tomaPliegue')
      .leftJoinAndSelect('ficha.registros24h', 'registro24h')
      .leftJoinAndSelect(
        'registro24h.rRegistro24hTipocomidas',
        'rRegistro24hTipocomidas',
      )
      .leftJoinAndSelect('rRegistro24hTipocomidas.fkTipoComida', 'tipoComida')
      .leftJoinAndSelect('ficha.planesNutricionales', 'planNutricional')
      .leftJoinAndSelect('ficha.examenes', 'examen')
      .where('usuario.rut = :rut', { rut })
      .getOne();

    if (!ficha) {
      throw new NotFoundException(`Ficha with RUT ${rut} not found`);
    }

    return ficha;
  }
}

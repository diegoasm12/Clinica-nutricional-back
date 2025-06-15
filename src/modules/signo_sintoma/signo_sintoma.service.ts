import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSignoSintomaDto } from './dto/create-signo_sintoma.dto';
import { UpdateSignoSintomaDto } from './dto/update-signo_sintoma.dto';
import { SignoSintoma } from './entities/signo_sintoma.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SignoSintomaService {
  constructor(
    @InjectRepository(SignoSintoma)
    private readonly repository: Repository<SignoSintoma>,
  ) {}

  public async createSignoSintoma(
    createSignoSintomaDto: CreateSignoSintomaDto,
  ): Promise<SignoSintoma> {
    const signoSintoma = this.repository.create({
      apetito: createSignoSintomaDto.apetito,
      calambre: createSignoSintomaDto.calambre,
      deposicionBristol: createSignoSintomaDto.deposicionBristol,
      diuresis: createSignoSintomaDto.diuresis,
      otro: createSignoSintomaDto.otro,
      polidipsia: createSignoSintomaDto.polidipsia,
      polifagia: createSignoSintomaDto.polifagia,
      poliuria: createSignoSintomaDto.poliuria,
      sudoracionNocturna: createSignoSintomaDto.sudoracionNocturna,
      tinitus: createSignoSintomaDto.tinitus,
      fkAnamnesisClinica: {
        id: createSignoSintomaDto.fkAnamnesisClinica_id,
      },
    });

    return this.repository.save(signoSintoma);
  }

  public async updateSignoSintoma(
    id: number,
    updateSignoSintomaDto: UpdateSignoSintomaDto,
  ): Promise<SignoSintoma> {
    const signoSintoma = await this.repository
      .createQueryBuilder('signoSintoma')
      .where('signoSintoma.id = :id', { id })
      .getOne();

    if (!signoSintoma) {
      throw new NotFoundException(`SignoSintoma with id ${id} not found`);
    }

    const updatedSignoSintoma = this.repository.create({
      apetito: updateSignoSintomaDto.apetito,
      calambre: updateSignoSintomaDto.calambre,
      deposicionBristol: updateSignoSintomaDto.deposicionBristol,
      diuresis: updateSignoSintomaDto.diuresis,
      otro: updateSignoSintomaDto.otro,
      polidipsia: updateSignoSintomaDto.polidipsia,
      polifagia: updateSignoSintomaDto.polifagia,
      poliuria: updateSignoSintomaDto.poliuria,
      sudoracionNocturna: updateSignoSintomaDto.sudoracionNocturna,
      tinitus: updateSignoSintomaDto.tinitus,
    });

    return this.repository.save(updatedSignoSintoma);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateAnamnesisClinicaDto } from './dto/create-anamnesis_clinica.dto';
import { UpdateAnamnesisClinicaDto } from './dto/update-anamnesis_clinica.dto';

@Injectable()
export class AnamnesisClinicaService {
  create(createAnamnesisClinicaDto: CreateAnamnesisClinicaDto) {
    return 'This action adds a new anamnesisClinica';
  }

  findAll() {
    return `This action returns all anamnesisClinica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} anamnesisClinica`;
  }

  update(id: number, updateAnamnesisClinicaDto: UpdateAnamnesisClinicaDto) {
    return `This action updates a #${id} anamnesisClinica`;
  }

  remove(id: number) {
    return `This action removes a #${id} anamnesisClinica`;
  }
}

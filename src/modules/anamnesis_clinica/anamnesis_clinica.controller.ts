import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnamnesisClinicaService } from './anamnesis_clinica.service';
import { CreateAnamnesisClinicaDto } from './dto/create-anamnesis_clinica.dto';
import { UpdateAnamnesisClinicaDto } from './dto/update-anamnesis_clinica.dto';

@Controller('anamnesis-clinica')
export class AnamnesisClinicaController {
  constructor(private readonly anamnesisClinicaService: AnamnesisClinicaService) {}

  @Post()
  create(@Body() createAnamnesisClinicaDto: CreateAnamnesisClinicaDto) {
    return this.anamnesisClinicaService.create(createAnamnesisClinicaDto);
  }

  @Get()
  findAll() {
    return this.anamnesisClinicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anamnesisClinicaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnamnesisClinicaDto: UpdateAnamnesisClinicaDto) {
    return this.anamnesisClinicaService.update(+id, updateAnamnesisClinicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anamnesisClinicaService.remove(+id);
  }
}

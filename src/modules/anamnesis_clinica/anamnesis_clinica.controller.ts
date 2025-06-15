import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnamnesisClinicaService } from './anamnesis_clinica.service';
import { CreateAnamnesisClinicaDto } from './dto/create-anamnesis_clinica.dto';
import { UpdateAnamnesisClinicaDto } from './dto/update-anamnesis_clinica.dto';

@Controller('anamnesis-clinica')
export class AnamnesisClinicaController {
  constructor(
    private readonly anamnesisClinicaService: AnamnesisClinicaService,
  ) {}

  @Post()
  create(@Body() createAnamnesisClinicaDto: CreateAnamnesisClinicaDto) {
    return this.anamnesisClinicaService.createAnamnesisClinica(
      createAnamnesisClinicaDto,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnamnesisClinicaDto: UpdateAnamnesisClinicaDto,
  ) {
    return this.anamnesisClinicaService.updateAnamnesisClinica(
      +id,
      updateAnamnesisClinicaDto,
    );
  }
}

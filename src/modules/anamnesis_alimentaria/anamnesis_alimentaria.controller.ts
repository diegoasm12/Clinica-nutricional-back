import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnamnesisAlimentariaService } from './anamnesis_alimentaria.service';
import { CreateAnamnesisAlimentariaDto } from './dto/create-anamnesis_alimentaria.dto';
import { UpdateAnamnesisAlimentariaDto } from './dto/update-anamnesis_alimentaria.dto';

@Controller('anamnesis-alimentaria')
export class AnamnesisAlimentariaController {
  constructor(
    private readonly anamnesisAlimentariaService: AnamnesisAlimentariaService,
  ) {}

  @Post()
  create(@Body() createAnamnesisAlimentariaDto: CreateAnamnesisAlimentariaDto) {
    return this.anamnesisAlimentariaService.createAnamnesisAlimentaria(
      createAnamnesisAlimentariaDto,
    );
  }
}

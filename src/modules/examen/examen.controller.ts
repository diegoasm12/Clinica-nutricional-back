import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ExamenService } from './examen.service';
import { CreateExamanDto } from './dto/create-examen.dto';

import { Examen } from './entities/examen.entity';

@Controller('examen')
export class ExamenController {
  constructor(private readonly examenService: ExamenService) {}

  @Post()
  async create(@Body() createExamanDto: CreateExamanDto): Promise<Examen> {
    return this.examenService.createExamen(createExamanDto);
  }
}

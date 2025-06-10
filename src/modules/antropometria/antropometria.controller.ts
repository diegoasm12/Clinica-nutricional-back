import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AntropometriaService } from './antropometria.service';
import { CreateAntropometriaDto } from './dto/create-antropometria.dto';
import { UpdateAntropometriaDto } from './dto/update-antropometria.dto';

@Controller('antropometria')
export class AntropometriaController {
  constructor(private readonly antropometriaService: AntropometriaService) {}

  @Post()
  create(@Body() createAntropometriaDto: CreateAntropometriaDto) {
    return this.antropometriaService.createAntropometria(
      createAntropometriaDto,
    );
  }
}

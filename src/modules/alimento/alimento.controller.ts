import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlimentoService } from './alimento.service';
import { CreateAlimentoDto } from './dto/create-alimento.dto';
import { UpdateAlimentoDto } from './dto/update-alimento.dto';

@Controller('alimento')
export class AlimentoController {
  constructor(private readonly alimentoService: AlimentoService) {}
}

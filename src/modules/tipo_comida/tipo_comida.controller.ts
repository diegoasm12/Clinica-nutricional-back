import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipoComidaService } from './tipo_comida.service';
import { CreateTipoComidaDto } from './dto/create-tipo_comida.dto';
import { UpdateTipoComidaDto } from './dto/update-tipo_comida.dto';

@Controller('tipo-comida')
export class TipoComidaController {
  constructor(private readonly tipoComidaService: TipoComidaService) {}

  @Get()
  findTiposComidas() {
    return this.tipoComidaService.findTiposComidas();
  }
}

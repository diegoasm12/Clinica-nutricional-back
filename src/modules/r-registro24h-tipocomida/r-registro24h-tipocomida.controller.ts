import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RRegistro24hTipocomidaService } from './r-registro24h-tipocomida.service';
import { CreateRRegistro24hTipocomidaDto } from './dto/create-r-registro24h-tipocomida.dto';
import { UpdateRRegistro24hTipocomidaDto } from './dto/update-r-registro24h-tipocomida.dto';

@Controller('r-registro24h-tipocomida')
export class RRegistro24hTipocomidaController {
  constructor(private readonly rRegistro24hTipocomidaService: RRegistro24hTipocomidaService) {}

}

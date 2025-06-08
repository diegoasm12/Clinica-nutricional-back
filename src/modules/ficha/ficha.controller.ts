import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FichaService } from './ficha.service';
import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';

@Controller('ficha')
export class FichaController {
  constructor(private readonly fichaService: FichaService) {}

  @Get()
  findAll() {
    return this.fichaService.findFichas();
  }

  @Post()
  create(@Body() createFichaDto: CreateFichaDto) {
    return this.fichaService.createFicha(createFichaDto);
  }
}

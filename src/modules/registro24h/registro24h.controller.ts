import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Registro24hService } from './registro24h.service';
import { CreateRegistro24hDto } from './dto/create-registro24h.dto';
import { UpdateRegistro24hDto } from './dto/update-registro24h.dto';
import { Registro24h } from './entities/registro24h.entity';

@Controller('registro24h')
export class Registro24hController {
  constructor(private readonly registro24hService: Registro24hService) {}

  @Post()
  create(
    @Body() createRegistro24hDto: CreateRegistro24hDto,
  ): Promise<Registro24h> {
    return this.registro24hService.createRegistro24h(createRegistro24hDto);
  }
}

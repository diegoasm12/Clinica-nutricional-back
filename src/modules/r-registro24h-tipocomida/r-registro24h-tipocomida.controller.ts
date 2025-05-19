import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RRegistro24hTipocomidaService } from './r-registro24h-tipocomida.service';
import { CreateRRegistro24hTipocomidaDto } from './dto/create-r-registro24h-tipocomida.dto';
import { UpdateRRegistro24hTipocomidaDto } from './dto/update-r-registro24h-tipocomida.dto';

@Controller('r-registro24h-tipocomida')
export class RRegistro24hTipocomidaController {
  constructor(private readonly rRegistro24hTipocomidaService: RRegistro24hTipocomidaService) {}

  @Post()
  create(@Body() createRRegistro24hTipocomidaDto: CreateRRegistro24hTipocomidaDto) {
    return this.rRegistro24hTipocomidaService.create(createRRegistro24hTipocomidaDto);
  }

  @Get()
  findAll() {
    return this.rRegistro24hTipocomidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rRegistro24hTipocomidaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRRegistro24hTipocomidaDto: UpdateRRegistro24hTipocomidaDto) {
    return this.rRegistro24hTipocomidaService.update(+id, updateRRegistro24hTipocomidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rRegistro24hTipocomidaService.remove(+id);
  }
}

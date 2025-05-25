import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignoSintomaService } from './signo_sintoma.service';
import { CreateSignoSintomaDto } from './dto/create-signo_sintoma.dto';
import { UpdateSignoSintomaDto } from './dto/update-signo_sintoma.dto';

@Controller('signo-sintoma')
export class SignoSintomaController {
  constructor(private readonly signoSintomaService: SignoSintomaService) {}

  @Post()
  create(@Body() createSignoSintomaDto: CreateSignoSintomaDto) {
    return this.signoSintomaService.create(createSignoSintomaDto);
  }

  @Get()
  findAll() {
    return this.signoSintomaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.signoSintomaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignoSintomaDto: UpdateSignoSintomaDto) {
    return this.signoSintomaService.update(+id, updateSignoSintomaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.signoSintomaService.remove(+id);
  }
}

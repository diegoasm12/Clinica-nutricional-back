import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HabitoService } from './habito.service';
import { CreateHabitoDto } from './dto/create-habito.dto';
import { UpdateHabitoDto } from './dto/update-habito.dto';

@Controller('habito')
export class HabitoController {
  constructor(private readonly habitoService: HabitoService) {}

  @Patch(':id')
  public async updateHabito(
    @Param('id') id: string,
    @Body() updateHabitoDto: UpdateHabitoDto,
  ): Promise<UpdateHabitoDto> {
    return this.habitoService.updateHabito(+id, updateHabitoDto);
  }
}

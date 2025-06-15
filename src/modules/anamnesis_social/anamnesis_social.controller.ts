import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnamnesisSocialService } from './anamnesis_social.service';
import { CreateAnamnesisSocialDto } from './dto/create-anamnesis_social.dto';
import { UpdateAnamnesisSocialDto } from './dto/update-anamnesis_social.dto';

@Controller('anamnesis-social')
export class AnamnesisSocialController {
  constructor(
    private readonly anamnesisSocialService: AnamnesisSocialService,
  ) {}

  @Post()
  create(@Body() createAnamnesisSocialDto: CreateAnamnesisSocialDto) {
    return this.anamnesisSocialService.createAnamnesisSocial(
      createAnamnesisSocialDto,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnamnesisSocialDto: UpdateAnamnesisSocialDto,
  ) {
    return this.anamnesisSocialService.updateAnamnesisSocial(
      +id,
      updateAnamnesisSocialDto,
    );
  }
}

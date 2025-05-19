import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TomaPliegueService } from './toma_pliegue.service';
import { CreateTomaPliegueDto } from './dto/create-toma_pliegue.dto';
import { UpdateTomaPliegueDto } from './dto/update-toma_pliegue.dto';

@Controller('toma-pliegue')
export class TomaPliegueController {
  constructor(private readonly tomaPliegueService: TomaPliegueService) {}

  @Post()
  create(@Body() createTomaPliegueDto: CreateTomaPliegueDto) {
    return this.tomaPliegueService.create(createTomaPliegueDto);
  }

  @Get()
  findAll() {
    return this.tomaPliegueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tomaPliegueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTomaPliegueDto: UpdateTomaPliegueDto) {
    return this.tomaPliegueService.update(+id, updateTomaPliegueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tomaPliegueService.remove(+id);
  }
}

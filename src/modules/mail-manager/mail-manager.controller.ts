import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailManagerService } from './mail-manager.service';
import { CreateMailManagerDto } from './dto/create-mail-manager.dto';
import { UpdateMailManagerDto } from './dto/update-mail-manager.dto';

@Controller('mail-manager')
export class MailManagerController {
  constructor(private readonly mailManagerService: MailManagerService) {}

  @Post()
  create(@Body() createMailManagerDto: CreateMailManagerDto) {
    return this.mailManagerService.create(createMailManagerDto);
  }

  @Get()
  findAll() {
    return this.mailManagerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailManagerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMailManagerDto: UpdateMailManagerDto) {
    return this.mailManagerService.update(+id, updateMailManagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailManagerService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PdfManagerService } from './pdf-manager.service';
import { CreatePdfManagerDto } from './dto/create-pdf-manager.dto';
import { UpdatePdfManagerDto } from './dto/update-pdf-manager.dto';

@Controller('pdf-manager')
export class PdfManagerController {
  constructor(private readonly pdfManagerService: PdfManagerService) {}

  @Post()
  create(@Body() createPdfManagerDto: CreatePdfManagerDto) {
    return this.pdfManagerService.create(createPdfManagerDto);
  }

  @Get()
  findAll() {
    return this.pdfManagerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pdfManagerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePdfManagerDto: UpdatePdfManagerDto) {
    return this.pdfManagerService.update(+id, updatePdfManagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pdfManagerService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PdfManagerService } from './pdf-manager.service';
import { CreatePdfManagerDto } from './dto/create-pdf-manager.dto';
import { UpdatePdfManagerDto } from './dto/update-pdf-manager.dto';

@Controller('pdf-manager')
export class PdfManagerController {
  constructor(private readonly pdfManagerService: PdfManagerService) {}

  @Get()
  public async findAll() {
    await this.pdfManagerService.modifyTemplate();

    return this.pdfManagerService.transformOdtToPdf();
  }
}

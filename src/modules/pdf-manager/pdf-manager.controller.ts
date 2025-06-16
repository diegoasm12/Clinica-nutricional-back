import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  StreamableFile,
} from '@nestjs/common';
import { PdfManagerService } from './pdf-manager.service';
import { CreatePdfManagerDto } from './dto/create-pdf-manager.dto';
import { UpdatePdfManagerDto } from './dto/update-pdf-manager.dto';

@Controller('pdf-manager')
export class PdfManagerController {
  constructor(private readonly pdfManagerService: PdfManagerService) {}

  @Get('plan-nutricional/:id')
  getPlanNutricional(@Param('id') id: number): Promise<StreamableFile> {
    return this.pdfManagerService.modifyTemplatePlanNutricional(id);
  }
}

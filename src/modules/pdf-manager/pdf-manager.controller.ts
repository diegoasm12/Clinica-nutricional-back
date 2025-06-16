import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  StreamableFile,
  Query,
} from '@nestjs/common';
import { PdfManagerService } from './pdf-manager.service';
import { CreatePdfManagerDto } from './dto/create-pdf-manager.dto';
import { UpdatePdfManagerDto } from './dto/update-pdf-manager.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('pdf-manager')
export class PdfManagerController {
  constructor(private readonly pdfManagerService: PdfManagerService) {}

  @Get('plan-nutricional/:id')
  @ApiQuery({
    name: 'email',
    required: false,
    description: 'If true, the PDF will be sent via email',
    type: Boolean,
  })
  getPlanNutricional(
    @Param('id') id: number,
    @Query('email') email?: boolean,
  ): Promise<StreamableFile> {
    return this.pdfManagerService.modifyTemplatePlanNutricional(id, email);
  }
}

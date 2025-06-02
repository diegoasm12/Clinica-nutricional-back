import { Injectable } from '@nestjs/common';
import { CreatePdfManagerDto } from './dto/create-pdf-manager.dto';
import { UpdatePdfManagerDto } from './dto/update-pdf-manager.dto';

@Injectable()
export class PdfManagerService {
  create(createPdfManagerDto: CreatePdfManagerDto) {
    return 'This action adds a new pdfManager';
  }

  findAll() {
    return `This action returns all pdfManager`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pdfManager`;
  }

  update(id: number, updatePdfManagerDto: UpdatePdfManagerDto) {
    return `This action updates a #${id} pdfManager`;
  }

  remove(id: number) {
    return `This action removes a #${id} pdfManager`;
  }
}

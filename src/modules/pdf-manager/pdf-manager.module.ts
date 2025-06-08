import { Module } from '@nestjs/common';
import { PdfManagerService } from './pdf-manager.service';
import { PdfManagerController } from './pdf-manager.controller';

@Module({
  controllers: [PdfManagerController],
  providers: [PdfManagerService],
})
export class PdfManagerModule {}

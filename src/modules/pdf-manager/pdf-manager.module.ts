import { Module } from '@nestjs/common';
import { PdfManagerService } from './pdf-manager.service';
import { PdfManagerController } from './pdf-manager.controller';
import { FichaModule } from '../ficha/ficha.module';

@Module({
  imports: [FichaModule],
  controllers: [PdfManagerController],
  providers: [PdfManagerService],
})
export class PdfManagerModule {}

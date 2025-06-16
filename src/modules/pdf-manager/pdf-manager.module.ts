import { Module } from '@nestjs/common';
import { PdfManagerService } from './pdf-manager.service';
import { PdfManagerController } from './pdf-manager.controller';
import { FichaModule } from '../ficha/ficha.module';
import { PlanNutricionalModule } from '../plan-nutricional/plan-nutricional.module';
import { MailManagerModule } from '../mail-manager/mail-manager.module';

@Module({
  imports: [FichaModule, PlanNutricionalModule, MailManagerModule],
  controllers: [PdfManagerController],
  providers: [PdfManagerService],
})
export class PdfManagerModule {}

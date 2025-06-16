import { Module } from '@nestjs/common';
import { PdfManagerService } from './pdf-manager.service';
import { PdfManagerController } from './pdf-manager.controller';
import { FichaModule } from '../ficha/ficha.module';
import { PlanNutricionalModule } from '../plan-nutricional/plan-nutricional.module';

@Module({
  imports: [FichaModule, PlanNutricionalModule],
  controllers: [PdfManagerController],
  providers: [PdfManagerService],
})
export class PdfManagerModule {}

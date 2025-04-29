import { Module } from '@nestjs/common';
import { AnamnesisClinicaService } from './anamnesis_clinica.service';
import { AnamnesisClinicaController } from './anamnesis_clinica.controller';

@Module({
  controllers: [AnamnesisClinicaController],
  providers: [AnamnesisClinicaService],
})
export class AnamnesisClinicaModule {}

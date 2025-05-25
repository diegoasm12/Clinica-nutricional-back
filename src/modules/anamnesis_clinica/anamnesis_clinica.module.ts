import { Module } from '@nestjs/common';
import { AnamnesisClinicaService } from './anamnesis_clinica.service';
import { AnamnesisClinicaController } from './anamnesis_clinica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnamnesisClinica } from './entities/anamnesis_clinica.entity';


@Module({
  imports:[TypeOrmModule.forFeature([AnamnesisClinica])],
  controllers: [AnamnesisClinicaController],
  providers: [AnamnesisClinicaService],
})
export class AnamnesisClinicaModule {}

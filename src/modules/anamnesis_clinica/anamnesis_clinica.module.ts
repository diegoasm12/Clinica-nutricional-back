import { Module } from '@nestjs/common';
import { AnamnesisClinicaService } from './anamnesis_clinica.service';
import { AnamnesisClinicaController } from './anamnesis_clinica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnamnesisClinica } from './entities/anamnesis_clinica.entity';
import { HabitoModule } from '../habito/habito.module';
import { SignoSintomaModule } from '../signo_sintoma/signo_sintoma.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnamnesisClinica]),
    HabitoModule,
    SignoSintomaModule,
  ],
  controllers: [AnamnesisClinicaController],
  providers: [AnamnesisClinicaService],
})
export class AnamnesisClinicaModule {}

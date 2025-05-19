import { Module } from '@nestjs/common';
import { AnamnesisAlimentariaService } from './anamnesis_alimentaria.service';
import { AnamnesisAlimentariaController } from './anamnesis_alimentaria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnamnesisAlimentaria } from './entities/anamnesis_alimentaria.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AnamnesisAlimentaria])],
  controllers: [AnamnesisAlimentariaController],
  providers: [AnamnesisAlimentariaService],
})
export class AnamnesisAlimentariaModule {}

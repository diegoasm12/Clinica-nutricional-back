import { Module } from '@nestjs/common';
import { AnamnesisSocialService } from './anamnesis_social.service';
import { AnamnesisSocialController } from './anamnesis_social.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnamnesisSocial } from './entities/anamnesis_social.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AnamnesisSocial])],
  controllers: [AnamnesisSocialController],
  providers: [AnamnesisSocialService],
})
export class AnamnesisSocialModule {}

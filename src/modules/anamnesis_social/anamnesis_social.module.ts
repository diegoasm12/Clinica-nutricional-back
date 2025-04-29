import { Module } from '@nestjs/common';
import { AnamnesisSocialService } from './anamnesis_social.service';
import { AnamnesisSocialController } from './anamnesis_social.controller';

@Module({
  controllers: [AnamnesisSocialController],
  providers: [AnamnesisSocialService],
})
export class AnamnesisSocialModule {}

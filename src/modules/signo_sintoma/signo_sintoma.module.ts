import { Module } from '@nestjs/common';
import { SignoSintomaService } from './signo_sintoma.service';
import { SignoSintomaController } from './signo_sintoma.controller';

@Module({
  controllers: [SignoSintomaController],
  providers: [SignoSintomaService],
})
export class SignoSintomaModule {}

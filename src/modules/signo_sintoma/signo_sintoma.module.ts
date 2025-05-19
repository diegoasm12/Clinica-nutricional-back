import { Module } from '@nestjs/common';
import { SignoSintomaService } from './signo_sintoma.service';
import { SignoSintomaController } from './signo_sintoma.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignoSintoma } from './entities/signo_sintoma.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SignoSintoma])],
  controllers: [SignoSintomaController],
  providers: [SignoSintomaService],
})
export class SignoSintomaModule {}

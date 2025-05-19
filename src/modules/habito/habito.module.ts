import { Module } from '@nestjs/common';
import { HabitoService } from './habito.service';
import { HabitoController } from './habito.controller';

@Module({
  controllers: [HabitoController],
  providers: [HabitoService],
})
export class HabitoModule {}

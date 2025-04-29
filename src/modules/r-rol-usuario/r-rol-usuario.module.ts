import { Module } from '@nestjs/common';
import { RRolUsuarioService } from './r-rol-usuario.service';
import { RRolUsuarioController } from './r-rol-usuario.controller';

@Module({
  controllers: [RRolUsuarioController],
  providers: [RRolUsuarioService],
})
export class RRolUsuarioModule {}

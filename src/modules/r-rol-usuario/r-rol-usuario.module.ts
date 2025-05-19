import { Module } from '@nestjs/common';
import { RRolUsuarioService } from './r-rol-usuario.service';
import { RRolUsuarioController } from './r-rol-usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RRolUsuario } from './entities/r-rol-usuario.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RRolUsuario])],
  controllers: [RRolUsuarioController],
  providers: [RRolUsuarioService],
})
export class RRolUsuarioModule {}

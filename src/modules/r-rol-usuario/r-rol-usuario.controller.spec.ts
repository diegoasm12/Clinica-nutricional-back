import { Test, TestingModule } from '@nestjs/testing';
import { RRolUsuarioController } from './r-rol-usuario.controller';
import { RRolUsuarioService } from './r-rol-usuario.service';

describe('RRolUsuarioController', () => {
  let controller: RRolUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RRolUsuarioController],
      providers: [RRolUsuarioService],
    }).compile();

    controller = module.get<RRolUsuarioController>(RRolUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

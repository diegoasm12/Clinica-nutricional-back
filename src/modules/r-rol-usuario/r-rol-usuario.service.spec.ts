import { Test, TestingModule } from '@nestjs/testing';
import { RRolUsuarioService } from './r-rol-usuario.service';

describe('RRolUsuarioService', () => {
  let service: RRolUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RRolUsuarioService],
    }).compile();

    service = module.get<RRolUsuarioService>(RRolUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

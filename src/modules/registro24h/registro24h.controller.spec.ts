import { Test, TestingModule } from '@nestjs/testing';
import { Registro24hController } from './registro24h.controller';
import { Registro24hService } from './registro24h.service';

describe('Registro24hController', () => {
  let controller: Registro24hController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Registro24hController],
      providers: [Registro24hService],
    }).compile();

    controller = module.get<Registro24hController>(Registro24hController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

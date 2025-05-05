import { Test, TestingModule } from '@nestjs/testing';
import { AlimentosController } from './alimentos.controller';
import { AlimentosService } from './alimentos.service';

describe('AlimentosController', () => {
  let controller: AlimentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlimentosController],
      providers: [AlimentosService],
    }).compile();

    controller = module.get<AlimentosController>(AlimentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

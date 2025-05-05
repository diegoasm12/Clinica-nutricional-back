import { Test, TestingModule } from '@nestjs/testing';
import { RAnamnesisAlimentariaAlimentosController } from './r-anamnesis_alimentaria-alimentos.controller';
import { RAnamnesisAlimentariaAlimentosService } from './r-anamnesis_alimentaria-alimentos.service';

describe('RAnamnesisAlimentariaAlimentosController', () => {
  let controller: RAnamnesisAlimentariaAlimentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RAnamnesisAlimentariaAlimentosController],
      providers: [RAnamnesisAlimentariaAlimentosService],
    }).compile();

    controller = module.get<RAnamnesisAlimentariaAlimentosController>(RAnamnesisAlimentariaAlimentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

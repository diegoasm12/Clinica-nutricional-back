import { Test, TestingModule } from '@nestjs/testing';
import { RAnamnesisAlimentariaAlimentosService } from './r-anamnesis_alimentaria-alimentos.service';

describe('RAnamnesisAlimentariaAlimentosService', () => {
  let service: RAnamnesisAlimentariaAlimentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RAnamnesisAlimentariaAlimentosService],
    }).compile();

    service = module.get<RAnamnesisAlimentariaAlimentosService>(RAnamnesisAlimentariaAlimentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

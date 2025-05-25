import { Test, TestingModule } from '@nestjs/testing';
import { AnamnesisAlimentariaService } from './anamnesis_alimentaria.service';

describe('AnamnesisAlimentariaService', () => {
  let service: AnamnesisAlimentariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnamnesisAlimentariaService],
    }).compile();

    service = module.get<AnamnesisAlimentariaService>(AnamnesisAlimentariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AlimentosService } from './alimentos.service';

describe('AlimentosService', () => {
  let service: AlimentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlimentosService],
    }).compile();

    service = module.get<AlimentosService>(AlimentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { Registro24hService } from './registro24h.service';

describe('Registro24hService', () => {
  let service: Registro24hService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Registro24hService],
    }).compile();

    service = module.get<Registro24hService>(Registro24hService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

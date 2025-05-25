import { Test, TestingModule } from '@nestjs/testing';
import { REncuestatendenciaconsumoAlimentoService } from './r-encuestatendenciaconsumo-alimento.service';

describe('REncuestatendenciaconsumoAlimentoService', () => {
  let service: REncuestatendenciaconsumoAlimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [REncuestatendenciaconsumoAlimentoService],
    }).compile();

    service = module.get<REncuestatendenciaconsumoAlimentoService>(REncuestatendenciaconsumoAlimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

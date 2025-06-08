import { Test, TestingModule } from '@nestjs/testing';
import { REncuestaTendenciaConsumoAlimentoService } from './r-encuesta-tendencia-consumo-alimento.service';

describe('REncuestaTendenciaConsumoAlimentoService', () => {
  let service: REncuestaTendenciaConsumoAlimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [REncuestaTendenciaConsumoAlimentoService],
    }).compile();

    service = module.get<REncuestaTendenciaConsumoAlimentoService>(REncuestaTendenciaConsumoAlimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

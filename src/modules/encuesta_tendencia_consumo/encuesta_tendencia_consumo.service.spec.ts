import { Test, TestingModule } from '@nestjs/testing';
import { EncuestaTendenciaConsumoService } from './encuesta_tendencia_consumo.service';

describe('EncuestaTendenciaConsumoService', () => {
  let service: EncuestaTendenciaConsumoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncuestaTendenciaConsumoService],
    }).compile();

    service = module.get<EncuestaTendenciaConsumoService>(EncuestaTendenciaConsumoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

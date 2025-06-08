import { Test, TestingModule } from '@nestjs/testing';
import { REncuestaTendenciaConsumoAlimentoController } from './r-encuesta-tendencia-consumo-alimento.controller';
import { REncuestaTendenciaConsumoAlimentoService } from './r-encuesta-tendencia-consumo-alimento.service';

describe('REncuestaTendenciaConsumoAlimentoController', () => {
  let controller: REncuestaTendenciaConsumoAlimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [REncuestaTendenciaConsumoAlimentoController],
      providers: [REncuestaTendenciaConsumoAlimentoService],
    }).compile();

    controller = module.get<REncuestaTendenciaConsumoAlimentoController>(REncuestaTendenciaConsumoAlimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { EncuestaTendenciaConsumoController } from './encuesta_tendencia_consumo.controller';
import { EncuestaTendenciaConsumoService } from './encuesta_tendencia_consumo.service';

describe('EncuestaTendenciaConsumoController', () => {
  let controller: EncuestaTendenciaConsumoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncuestaTendenciaConsumoController],
      providers: [EncuestaTendenciaConsumoService],
    }).compile();

    controller = module.get<EncuestaTendenciaConsumoController>(EncuestaTendenciaConsumoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

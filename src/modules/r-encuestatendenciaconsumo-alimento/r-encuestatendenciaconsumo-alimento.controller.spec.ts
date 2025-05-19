import { Test, TestingModule } from '@nestjs/testing';
import { REncuestatendenciaconsumoAlimentoController } from './r-encuestatendenciaconsumo-alimento.controller';
import { REncuestatendenciaconsumoAlimentoService } from './r-encuestatendenciaconsumo-alimento.service';

describe('REncuestatendenciaconsumoAlimentoController', () => {
  let controller: REncuestatendenciaconsumoAlimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [REncuestatendenciaconsumoAlimentoController],
      providers: [REncuestatendenciaconsumoAlimentoService],
    }).compile();

    controller = module.get<REncuestatendenciaconsumoAlimentoController>(REncuestatendenciaconsumoAlimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

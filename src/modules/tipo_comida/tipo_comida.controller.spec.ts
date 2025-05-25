import { Test, TestingModule } from '@nestjs/testing';
import { TipoComidaController } from './tipo_comida.controller';
import { TipoComidaService } from './tipo_comida.service';

describe('TipoComidaController', () => {
  let controller: TipoComidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoComidaController],
      providers: [TipoComidaService],
    }).compile();

    controller = module.get<TipoComidaController>(TipoComidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

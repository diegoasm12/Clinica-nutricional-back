import { Test, TestingModule } from '@nestjs/testing';
import { RRegistro24hTipocomidaController } from './r-registro24h-tipocomida.controller';
import { RRegistro24hTipocomidaService } from './r-registro24h-tipocomida.service';

describe('RRegistro24hTipocomidaController', () => {
  let controller: RRegistro24hTipocomidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RRegistro24hTipocomidaController],
      providers: [RRegistro24hTipocomidaService],
    }).compile();

    controller = module.get<RRegistro24hTipocomidaController>(RRegistro24hTipocomidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

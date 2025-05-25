import { Test, TestingModule } from '@nestjs/testing';
import { RRegistro24hTipocomidaService } from './r-registro24h-tipocomida.service';

describe('RRegistro24hTipocomidaService', () => {
  let service: RRegistro24hTipocomidaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RRegistro24hTipocomidaService],
    }).compile();

    service = module.get<RRegistro24hTipocomidaService>(RRegistro24hTipocomidaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

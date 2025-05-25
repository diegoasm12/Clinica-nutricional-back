import { Test, TestingModule } from '@nestjs/testing';
import { TipoComidaService } from './tipo_comida.service';

describe('TipoComidaService', () => {
  let service: TipoComidaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoComidaService],
    }).compile();

    service = module.get<TipoComidaService>(TipoComidaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

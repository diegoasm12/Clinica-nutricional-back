import { Test, TestingModule } from '@nestjs/testing';
import { AntropometriaService } from './antropometria.service';

describe('AntropometriaService', () => {
  let service: AntropometriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AntropometriaService],
    }).compile();

    service = module.get<AntropometriaService>(AntropometriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

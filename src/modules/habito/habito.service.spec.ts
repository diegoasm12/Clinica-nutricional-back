import { Test, TestingModule } from '@nestjs/testing';
import { HabitoService } from './habito.service';

describe('HabitoService', () => {
  let service: HabitoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabitoService],
    }).compile();

    service = module.get<HabitoService>(HabitoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

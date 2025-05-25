import { Test, TestingModule } from '@nestjs/testing';
import { TomaPliegueService } from './toma_pliegue.service';

describe('TomaPliegueService', () => {
  let service: TomaPliegueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TomaPliegueService],
    }).compile();

    service = module.get<TomaPliegueService>(TomaPliegueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

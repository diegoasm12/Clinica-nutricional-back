import { Test, TestingModule } from '@nestjs/testing';
import { PlanNutricionalService } from './plan-nutricional.service';

describe('PlanNutricionalService', () => {
  let service: PlanNutricionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanNutricionalService],
    }).compile();

    service = module.get<PlanNutricionalService>(PlanNutricionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

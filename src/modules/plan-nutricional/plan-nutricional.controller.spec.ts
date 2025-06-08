import { Test, TestingModule } from '@nestjs/testing';
import { PlanNutricionalController } from './plan-nutricional.controller';
import { PlanNutricionalService } from './plan-nutricional.service';

describe('PlanNutricionalController', () => {
  let controller: PlanNutricionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanNutricionalController],
      providers: [PlanNutricionalService],
    }).compile();

    controller = module.get<PlanNutricionalController>(PlanNutricionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

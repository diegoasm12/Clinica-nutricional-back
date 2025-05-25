import { Test, TestingModule } from '@nestjs/testing';
import { TomaPliegueController } from './toma_pliegue.controller';
import { TomaPliegueService } from './toma_pliegue.service';

describe('TomaPliegueController', () => {
  let controller: TomaPliegueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TomaPliegueController],
      providers: [TomaPliegueService],
    }).compile();

    controller = module.get<TomaPliegueController>(TomaPliegueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { HabitoController } from './habito.controller';
import { HabitoService } from './habito.service';

describe('HabitoController', () => {
  let controller: HabitoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitoController],
      providers: [HabitoService],
    }).compile();

    controller = module.get<HabitoController>(HabitoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

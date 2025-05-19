import { Test, TestingModule } from '@nestjs/testing';
import { AntropometriaController } from './antropometria.controller';
import { AntropometriaService } from './antropometria.service';

describe('AntropometriaController', () => {
  let controller: AntropometriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AntropometriaController],
      providers: [AntropometriaService],
    }).compile();

    controller = module.get<AntropometriaController>(AntropometriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

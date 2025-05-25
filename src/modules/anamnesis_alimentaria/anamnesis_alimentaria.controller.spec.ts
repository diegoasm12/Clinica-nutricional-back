import { Test, TestingModule } from '@nestjs/testing';
import { AnamnesisAlimentariaController } from './anamnesis_alimentaria.controller';
import { AnamnesisAlimentariaService } from './anamnesis_alimentaria.service';

describe('AnamnesisAlimentariaController', () => {
  let controller: AnamnesisAlimentariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnamnesisAlimentariaController],
      providers: [AnamnesisAlimentariaService],
    }).compile();

    controller = module.get<AnamnesisAlimentariaController>(AnamnesisAlimentariaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

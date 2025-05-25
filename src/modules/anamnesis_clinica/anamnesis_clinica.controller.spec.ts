import { Test, TestingModule } from '@nestjs/testing';
import { AnamnesisClinicaController } from './anamnesis_clinica.controller';
import { AnamnesisClinicaService } from './anamnesis_clinica.service';

describe('AnamnesisClinicaController', () => {
  let controller: AnamnesisClinicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnamnesisClinicaController],
      providers: [AnamnesisClinicaService],
    }).compile();

    controller = module.get<AnamnesisClinicaController>(AnamnesisClinicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

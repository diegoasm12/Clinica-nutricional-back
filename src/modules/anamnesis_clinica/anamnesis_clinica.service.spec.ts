import { Test, TestingModule } from '@nestjs/testing';
import { AnamnesisClinicaService } from './anamnesis_clinica.service';

describe('AnamnesisClinicaService', () => {
  let service: AnamnesisClinicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnamnesisClinicaService],
    }).compile();

    service = module.get<AnamnesisClinicaService>(AnamnesisClinicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AnamnesisSocialService } from './anamnesis_social.service';

describe('AnamnesisSocialService', () => {
  let service: AnamnesisSocialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnamnesisSocialService],
    }).compile();

    service = module.get<AnamnesisSocialService>(AnamnesisSocialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SignoSintomaService } from './signo_sintoma.service';

describe('SignoSintomaService', () => {
  let service: SignoSintomaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignoSintomaService],
    }).compile();

    service = module.get<SignoSintomaService>(SignoSintomaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

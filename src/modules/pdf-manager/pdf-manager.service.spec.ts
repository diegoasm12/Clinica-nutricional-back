import { Test, TestingModule } from '@nestjs/testing';
import { PdfManagerService } from './pdf-manager.service';

describe('PdfManagerService', () => {
  let service: PdfManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfManagerService],
    }).compile();

    service = module.get<PdfManagerService>(PdfManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

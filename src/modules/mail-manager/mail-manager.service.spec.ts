import { Test, TestingModule } from '@nestjs/testing';
import { MailManagerService } from './mail-manager.service';

describe('MailManagerService', () => {
  let service: MailManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailManagerService],
    }).compile();

    service = module.get<MailManagerService>(MailManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

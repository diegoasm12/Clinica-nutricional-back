import { Test, TestingModule } from '@nestjs/testing';
import { PdfManagerController } from './pdf-manager.controller';
import { PdfManagerService } from './pdf-manager.service';

describe('PdfManagerController', () => {
  let controller: PdfManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfManagerController],
      providers: [PdfManagerService],
    }).compile();

    controller = module.get<PdfManagerController>(PdfManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

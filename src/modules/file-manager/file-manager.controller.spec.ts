import { Test, TestingModule } from '@nestjs/testing';
import { FileManagerController } from './file-manager.controller';
import { FileManagerService } from './file-manager.service';

describe('FileManagerController', () => {
  let controller: FileManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileManagerController],
      providers: [FileManagerService],
    }).compile();

    controller = module.get<FileManagerController>(FileManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AnamnesisSocialController } from './anamnesis_social.controller';
import { AnamnesisSocialService } from './anamnesis_social.service';

describe('AnamnesisSocialController', () => {
  let controller: AnamnesisSocialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnamnesisSocialController],
      providers: [AnamnesisSocialService],
    }).compile();

    controller = module.get<AnamnesisSocialController>(AnamnesisSocialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

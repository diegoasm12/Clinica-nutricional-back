import { Test, TestingModule } from '@nestjs/testing';
import { SignoSintomaController } from './signo_sintoma.controller';
import { SignoSintomaService } from './signo_sintoma.service';

describe('SignoSintomaController', () => {
  let controller: SignoSintomaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignoSintomaController],
      providers: [SignoSintomaService],
    }).compile();

    controller = module.get<SignoSintomaController>(SignoSintomaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

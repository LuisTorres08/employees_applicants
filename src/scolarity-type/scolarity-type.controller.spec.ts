import { Test, TestingModule } from '@nestjs/testing';
import { ScolarityTypeController } from './scolarity-type.controller';
import { ScolarityTypeService } from './scolarity-type.service';

describe('ScolarityTypeController', () => {
  let controller: ScolarityTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScolarityTypeController],
      providers: [ScolarityTypeService],
    }).compile();

    controller = module.get<ScolarityTypeController>(ScolarityTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

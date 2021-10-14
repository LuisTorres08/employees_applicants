import { Test, TestingModule } from '@nestjs/testing';
import { ScolarityTypeService } from './scolarity-type.service';

describe('ScolarityTypeService', () => {
  let service: ScolarityTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScolarityTypeService],
    }).compile();

    service = module.get<ScolarityTypeService>(ScolarityTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

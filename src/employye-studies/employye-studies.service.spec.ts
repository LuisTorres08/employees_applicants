import { Test, TestingModule } from '@nestjs/testing';
import { EmployyeStudiesService } from './employye-studies.service';

describe('EmployyeStudiesService', () => {
  let service: EmployyeStudiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployyeStudiesService],
    }).compile();

    service = module.get<EmployyeStudiesService>(EmployyeStudiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

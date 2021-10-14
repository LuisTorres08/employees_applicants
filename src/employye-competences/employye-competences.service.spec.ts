import { Test, TestingModule } from '@nestjs/testing';
import { EmployyeCompetencesService } from './employye-competences.service';

describe('EmployyeCompetencesService', () => {
  let service: EmployyeCompetencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployyeCompetencesService],
    }).compile();

    service = module.get<EmployyeCompetencesService>(EmployyeCompetencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

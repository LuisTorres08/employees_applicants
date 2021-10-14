import { Test, TestingModule } from '@nestjs/testing';
import { EmployyeCompetencesController } from './employye-competences.controller';
import { EmployyeCompetencesService } from './employye-competences.service';

describe('EmployyeCompetencesController', () => {
  let controller: EmployyeCompetencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployyeCompetencesController],
      providers: [EmployyeCompetencesService],
    }).compile();

    controller = module.get<EmployyeCompetencesController>(EmployyeCompetencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

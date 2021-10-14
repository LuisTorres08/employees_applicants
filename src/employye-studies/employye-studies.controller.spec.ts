import { Test, TestingModule } from '@nestjs/testing';
import { EmployyeStudiesController } from './employye-studies.controller';
import { EmployyeStudiesService } from './employye-studies.service';

describe('EmployyeStudiesController', () => {
  let controller: EmployyeStudiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployyeStudiesController],
      providers: [EmployyeStudiesService],
    }).compile();

    controller = module.get<EmployyeStudiesController>(EmployyeStudiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

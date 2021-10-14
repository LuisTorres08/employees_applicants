import { Injectable } from '@nestjs/common';
import { CreateEmployyeStudyDto } from './dto/create-employye-study.dto';
import { UpdateEmployyeStudyDto } from './dto/update-employye-study.dto';

@Injectable()
export class EmployyeStudiesService {
  create(createEmployyeStudyDto: CreateEmployyeStudyDto) {
    return 'This action adds a new employyeStudy';
  }

  findAll() {
    return `This action returns all employyeStudies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employyeStudy`;
  }

  update(id: number, updateEmployyeStudyDto: UpdateEmployyeStudyDto) {
    return `This action updates a #${id} employyeStudy`;
  }

  remove(id: number) {
    return `This action removes a #${id} employyeStudy`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateEmployyeCompetenceDto } from './dto/create-employye-competence.dto';
import { UpdateEmployyeCompetenceDto } from './dto/update-employye-competence.dto';

@Injectable()
export class EmployyeCompetencesService {
  create(createEmployyeCompetenceDto: CreateEmployyeCompetenceDto) {
    return 'This action adds a new employyeCompetence';
  }

  findAll() {
    return `This action returns all employyeCompetences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employyeCompetence`;
  }

  update(id: number, updateEmployyeCompetenceDto: UpdateEmployyeCompetenceDto) {
    return `This action updates a #${id} employyeCompetence`;
  }

  remove(id: number) {
    return `This action removes a #${id} employyeCompetence`;
  }
}

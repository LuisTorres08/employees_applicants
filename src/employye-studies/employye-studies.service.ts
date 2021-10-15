import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployyeStudyDto } from './dto/create-employye-study.dto';
import { UpdateEmployyeStudyDto } from './dto/update-employye-study.dto';
import { EmployyeStudy } from './entities/employye-study.entity';

@Injectable()
export class EmployeeStudiesService {
  constructor(
    @InjectRepository(EmployyeStudy) private employyeStudyRepository: Repository<EmployyeStudy>,
  ) {}

  create(createEmployyeStudyDto: CreateEmployyeStudyDto): Promise<EmployyeStudy> {
    const employyeStudy = this.employyeStudyRepository.create(createEmployyeStudyDto);
    return this.employyeStudyRepository.save(employyeStudy);
  }

  findAll(): Promise<EmployyeStudy[]> {
    return this.employyeStudyRepository.find();
  }

  findOne(id: number): Promise<EmployyeStudy> {
    return this.employyeStudyRepository.findOne(id);
  }

  async update(id: number, updateEmployyeStudyDto: UpdateEmployyeStudyDto): Promise<EmployyeStudy> {
   const employyeStudy = await this.employyeStudyRepository.preload({
     id: id,
     ...updateEmployyeStudyDto,
   });
   if (!employyeStudy) {
     throw new NotFoundException(`EmployyeStudy ${id} not found`);
   }
   return this.employyeStudyRepository.save(employyeStudy);
 }
  

 async remove(id: number) {
  const employyeStudy = await this.findOne(id);
  return this.employyeStudyRepository.remove(employyeStudy);
}
}


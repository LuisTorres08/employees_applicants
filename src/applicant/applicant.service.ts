import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { Applicant } from './entities/applicant.entity';



  @Injectable()
export class ApplicantService {
  constructor(
    @InjectRepository(Applicant) private applicantRepository: Repository<Applicant>,
  ) {}

  create(createApplicantDto: CreateApplicantDto) {
    return this.applicantRepository.save(createApplicantDto);
  }

  findAll() {
    return this.applicantRepository.find();
  }

  findOne(id: number) {
    return this.applicantRepository.findOne(id);
  }

  update(id: number, updateApplicantDto: UpdateApplicantDto) {
    return `This action updates a #${id} applicant`;
  }

  remove(id: number) {
    return `This action removes a #${id} applicant`;
  }
}

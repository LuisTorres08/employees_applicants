import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkRecordDto } from './dto/create-work-record.dto';
import { UpdateWorkRecordDto } from './dto/update-work-record.dto';
import { WorkRecord } from './entities/work-record.entity';

@Injectable()
export class WorkRecordService {
  constructor(
    @InjectRepository(WorkRecord) private workRecordRepository: Repository<WorkRecord>,
  ) {}

  create(createWorkRecordDto: CreateWorkRecordDto): Promise<WorkRecord> {
    const workRecord = this.workRecordRepository.create(createWorkRecordDto);
    return this.workRecordRepository.save(workRecord);
  }

  findAll(): Promise<WorkRecord[]> {
    return this.workRecordRepository.find();
  }

  findOne(id: number): Promise<WorkRecord> {
    return this.workRecordRepository.findOne(id);
  }

  async update(id: number, updateWorkRecordDto: UpdateWorkRecordDto): Promise<WorkRecord> {
   const workRecord = await this.workRecordRepository.preload({
     id: id,
     ...updateWorkRecordDto,
   });
   if (!workRecord) {
     throw new NotFoundException(`Work Record ${id} not found`);
   }
   return this.workRecordRepository.save(workRecord);
 }
  

 async remove(id: number) {
  const workRecord = await this.findOne(id);
  return this.workRecordRepository.remove(workRecord);
}
}

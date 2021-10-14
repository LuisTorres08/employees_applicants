import { Injectable } from '@nestjs/common';
import { CreateScolarityTypeDto } from './dto/create-scolarity-type.dto';
import { UpdateScolarityTypeDto } from './dto/update-scolarity-type.dto';

@Injectable()
export class ScolarityTypeService {
  create(createScolarityTypeDto: CreateScolarityTypeDto) {
    return 'This action adds a new scolarityType';
  }

  findAll() {
    return `This action returns all scolarityType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scolarityType`;
  }

  update(id: number, updateScolarityTypeDto: UpdateScolarityTypeDto) {
    return `This action updates a #${id} scolarityType`;
  }

  remove(id: number) {
    return `This action removes a #${id} scolarityType`;
  }
}

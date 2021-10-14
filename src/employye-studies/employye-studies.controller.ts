import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployyeStudiesService } from './employye-studies.service';
import { CreateEmployyeStudyDto } from './dto/create-employye-study.dto';
import { UpdateEmployyeStudyDto } from './dto/update-employye-study.dto';

@Controller('employye-studies')
export class EmployyeStudiesController {
  constructor(private readonly employyeStudiesService: EmployyeStudiesService) {}

  @Post()
  create(@Body() createEmployyeStudyDto: CreateEmployyeStudyDto) {
    return this.employyeStudiesService.create(createEmployyeStudyDto);
  }

  @Get()
  findAll() {
    return this.employyeStudiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employyeStudiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployyeStudyDto: UpdateEmployyeStudyDto) {
    return this.employyeStudiesService.update(+id, updateEmployyeStudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employyeStudiesService.remove(+id);
  }
}

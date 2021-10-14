import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployyeCompetencesService } from './employye-competences.service';
import { CreateEmployyeCompetenceDto } from './dto/create-employye-competence.dto';
import { UpdateEmployyeCompetenceDto } from './dto/update-employye-competence.dto';

@Controller('employye-competences')
export class EmployyeCompetencesController {
  constructor(private readonly employyeCompetencesService: EmployyeCompetencesService) {}

  @Post()
  create(@Body() createEmployyeCompetenceDto: CreateEmployyeCompetenceDto) {
    return this.employyeCompetencesService.create(createEmployyeCompetenceDto);
  }

  @Get()
  findAll() {
    return this.employyeCompetencesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employyeCompetencesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployyeCompetenceDto: UpdateEmployyeCompetenceDto) {
    return this.employyeCompetencesService.update(+id, updateEmployyeCompetenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employyeCompetencesService.remove(+id);
  }
}

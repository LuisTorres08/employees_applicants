import { Module } from '@nestjs/common';
import { EmployyeCompetencesService } from './employye-competences.service';
import { EmployyeCompetencesController } from './employye-competences.controller';

@Module({
  controllers: [EmployyeCompetencesController],
  providers: [EmployyeCompetencesService]
})
export class EmployyeCompetencesModule {}

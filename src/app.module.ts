import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ApplicantModule } from './applicant/applicant.module';
import { EmployeesModule } from './employees/employees.module';
import { EmployyeCompetencesModule } from './employye-competences/employye-competences.module';
import { CompetencesModule } from './competences/competences.module';
import { EmployyeStudiesModule } from './employye-studies/employye-studies.module';
import { WorkRecordsModule } from './work-records/work-records.module';
import { ScolarityTypeModule } from './scolarity-type/scolarity-type.module';
import { InstitutionsModule } from './institutions/institutions.module';
import { ProfessionsModule } from './professions/professions.module';
import { JobTitlesModule } from './job-titles/job-titles.module';

@Module({
  imports: [UsersModule, ApplicantModule, EmployeesModule, EmployyeCompetencesModule, CompetencesModule, EmployyeStudiesModule, WorkRecordsModule, ScolarityTypeModule, InstitutionsModule, ProfessionsModule, JobTitlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

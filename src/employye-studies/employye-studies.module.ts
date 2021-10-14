import { Module } from '@nestjs/common';
import { EmployyeStudiesService } from './employye-studies.service';
import { EmployyeStudiesController } from './employye-studies.controller';

@Module({
  controllers: [EmployyeStudiesController],
  providers: [EmployyeStudiesService]
})
export class EmployyeStudiesModule {}

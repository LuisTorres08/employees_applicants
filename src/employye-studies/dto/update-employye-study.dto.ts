import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployyeStudyDto } from './create-employye-study.dto';

export class UpdateEmployyeStudyDto extends PartialType(CreateEmployyeStudyDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployyeCompetenceDto } from './create-employye-competence.dto';

export class UpdateEmployyeCompetenceDto extends PartialType(CreateEmployyeCompetenceDto) {}

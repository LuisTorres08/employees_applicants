import { PartialType } from '@nestjs/mapped-types';
import { CreateScolarityTypeDto } from './create-scolarity-type.dto';

export class UpdateScolarityTypeDto extends PartialType(CreateScolarityTypeDto) {}

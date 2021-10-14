import { Module } from '@nestjs/common';
import { ScolarityTypeService } from './scolarity-type.service';
import { ScolarityTypeController } from './scolarity-type.controller';

@Module({
  controllers: [ScolarityTypeController],
  providers: [ScolarityTypeService]
})
export class ScolarityTypeModule {}

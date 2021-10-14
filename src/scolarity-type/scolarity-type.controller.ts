import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScolarityTypeService } from './scolarity-type.service';
import { CreateScolarityTypeDto } from './dto/create-scolarity-type.dto';
import { UpdateScolarityTypeDto } from './dto/update-scolarity-type.dto';

@Controller('scolarity-type')
export class ScolarityTypeController {
  constructor(private readonly scolarityTypeService: ScolarityTypeService) {}

  @Post()
  create(@Body() createScolarityTypeDto: CreateScolarityTypeDto) {
    return this.scolarityTypeService.create(createScolarityTypeDto);
  }

  @Get()
  findAll() {
    return this.scolarityTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scolarityTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScolarityTypeDto: UpdateScolarityTypeDto) {
    return this.scolarityTypeService.update(+id, updateScolarityTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scolarityTypeService.remove(+id);
  }
}

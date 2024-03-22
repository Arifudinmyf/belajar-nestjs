import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrudSimpleService } from './crud-simple.service';
import { CreateCrudSimpleDto } from './dto/create-crud-simple.dto';
import { UpdateCrudSimpleDto } from './dto/update-crud-simple.dto';

@Controller('crud-simple')
export class CrudSimpleController {
  constructor(private readonly crudSimpleService: CrudSimpleService) {}

  @Post()
  create(@Body() createCrudSimpleDto: CreateCrudSimpleDto) {
    return this.crudSimpleService.create(createCrudSimpleDto);
  }

  @Get()
  findAll() {
    return this.crudSimpleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudSimpleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrudSimpleDto: UpdateCrudSimpleDto) {
    return this.crudSimpleService.update(+id, updateCrudSimpleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudSimpleService.remove(+id);
  }
}

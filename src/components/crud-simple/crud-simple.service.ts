import { Injectable } from '@nestjs/common';
import { CreateCrudSimpleDto } from './dto/create-crud-simple.dto';
import { UpdateCrudSimpleDto } from './dto/update-crud-simple.dto';

@Injectable()
export class CrudSimpleService {
  create(createCrudSimpleDto: CreateCrudSimpleDto) {
    return 'This action adds a new crudSimple';
  }

  findAll() {
    return `This action returns all crudSimple`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crudSimple`;
  }

  update(id: number, updateCrudSimpleDto: UpdateCrudSimpleDto) {
    return `This action updates a #${id} crudSimple`;
  }

  remove(id: number) {
    return `This action removes a #${id} crudSimple`;
  }
}

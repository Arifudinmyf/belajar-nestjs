import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudSimpleDto } from './create-crud-simple.dto';

export class UpdateCrudSimpleDto extends PartialType(CreateCrudSimpleDto) {}

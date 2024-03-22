import { Module } from '@nestjs/common';
import { CrudSimpleService } from './crud-simple.service';
import { CrudSimpleController } from './crud-simple.controller';

@Module({
  controllers: [CrudSimpleController],
  providers: [CrudSimpleService],
})
export class CrudSimpleModule {}

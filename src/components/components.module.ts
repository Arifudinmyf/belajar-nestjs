/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CrudSimpleModule } from './crud-simple/crud-simple.module';

@Module({
    imports: [CrudSimpleModule],
    controllers: [],
    providers: [],
})
export class ComponentsModule {}

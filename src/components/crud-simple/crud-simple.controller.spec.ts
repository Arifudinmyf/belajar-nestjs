import { Test, TestingModule } from '@nestjs/testing';
import { CrudSimpleController } from './crud-simple.controller';
import { CrudSimpleService } from './crud-simple.service';

describe('CrudSimpleController', () => {
  let controller: CrudSimpleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudSimpleController],
      providers: [CrudSimpleService],
    }).compile();

    controller = module.get<CrudSimpleController>(CrudSimpleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

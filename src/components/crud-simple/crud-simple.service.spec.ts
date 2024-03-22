import { Test, TestingModule } from '@nestjs/testing';
import { CrudSimpleService } from './crud-simple.service';

describe('CrudSimpleService', () => {
  let service: CrudSimpleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudSimpleService],
    }).compile();

    service = module.get<CrudSimpleService>(CrudSimpleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

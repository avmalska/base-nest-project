import { Test, TestingModule } from '@nestjs/testing';
import { PeixeController } from './peixe.controller';

describe('PeixeController', () => {
  let controller: PeixeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeixeController],
    }).compile();

    controller = module.get<PeixeController>(PeixeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

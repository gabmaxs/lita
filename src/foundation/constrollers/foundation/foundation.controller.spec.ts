import { Test, TestingModule } from '@nestjs/testing';
import { FoundationController } from './foundation.controller';

describe('FoundationController', () => {
  let controller: FoundationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoundationController],
    }).compile();

    controller = module.get<FoundationController>(FoundationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "ok" on healthcheck', () => {
    const result = controller.healthcheck();
    expect(result).toHaveProperty('data', true);
    expect(result).toHaveProperty('uptime');
  });
});

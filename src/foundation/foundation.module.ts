import { Module } from '@nestjs/common';
import { FoundationController } from './constrollers/foundation/foundation.controller';

@Module({
  controllers: [FoundationController],
})
export class FoundationModule {}

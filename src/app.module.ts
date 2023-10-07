import { Module } from '@nestjs/common';
import { FoundationModule } from './foundation/foundation.module';

@Module({
  imports: [FoundationModule],
})
export class AppModule {}

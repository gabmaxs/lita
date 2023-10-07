import { Module } from '@nestjs/common';
import { FoundationModule } from './foundation/foundation.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [FoundationModule, DatabaseModule],
})
export class AppModule {}

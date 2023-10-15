import { Module } from '@nestjs/common';
import { databaseProviders } from './database';
import NoteRepository from './repositories/NoteRepository';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders, NoteRepository],
})
export class DatabaseModule {}

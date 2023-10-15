import { Note } from 'src/database/models/NoteModel';
import AbstractRepository from 'src/database/repositories/AbstractRepository';

export interface NoteRepositoryContract extends AbstractRepository<Note> {}

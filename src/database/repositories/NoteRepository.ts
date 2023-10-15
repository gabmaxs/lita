import { Note } from '../models/NoteModel';
import AbstractRepository from './AbstractRepository';

export default class NoteRepository extends AbstractRepository<Note> {
  constructor() {
    super(Note);
  }
}

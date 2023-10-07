import NoteEntity from 'src/core/entities/NoteEntity';
import NoteUseCase from './NoteUseCase';

describe('NoteUseCase', () => {
  let noteUseCase: NoteUseCase;

  beforeEach(() => {
    noteUseCase = new NoteUseCase();
  });

  it('should be defined', () => {
    expect(noteUseCase).toBeDefined();
  });

  it('should return all notes', () => {
    const notes: NoteEntity[] = noteUseCase.findAll();

    expect(notes).toStrictEqual([]);
  });

  it('should create a new note', () => {
    const note: NoteEntity = noteUseCase.create();

    expect(note).toBeDefined();
  });
});

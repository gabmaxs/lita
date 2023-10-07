import NoteEntity from 'src/core/entities/NoteEntity';

class NoteUseCase {
  findAll(): NoteEntity[] {
    return [];
  }

  create(): NoteEntity {
    return {} as unknown as NoteEntity;
  }
}

export default NoteUseCase;

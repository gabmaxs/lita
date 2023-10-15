import { NoteRepositoryContract } from 'src/core/contracts/repositories/NoteRepositoryContract';
import NoteEntity from 'src/core/entities/NoteEntity';

class NoteUseCase {
  constructor(private noteRepository: NoteRepositoryContract) {}

  async findAll(): Promise<NoteEntity[]> {
    const notesFromRepository = await this.noteRepository.all();

    // @todo: create a method or class to do this map
    return notesFromRepository.map((note) => ({
      id: note.id,
      title: note.name,
      text: note.text,
      type: {
        id: null,
        name: null,
      },
    }));
  }

  async create(data: Partial<NoteEntity>): Promise<NoteEntity> {
    // @todo: create a method or class to do this map
    const note = await this.noteRepository.store({
      name: data.text,
      text: data.text,
    });

    // @todo: create a method or class to do this map
    return {
      id: note.id,
      title: note.name,
      text: note.text,
      type: {
        id: null,
        name: null,
      },
    };
  }
}

export default NoteUseCase;

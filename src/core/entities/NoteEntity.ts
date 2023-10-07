import Type from '../types/Type';

interface NoteEntity {
  id: number;
  title: string;
  text: string;
  type: Type;
}

export default NoteEntity;

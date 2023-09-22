import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react';

import { NoteService } from '../services/api/Notes/UsersService';
import { NoteEntity } from '../services/api/Notes/entity/NoteEntity';
import { UpdateNoteDto } from '../services/api/Notes/dtos/UpdateNoteDto';
import { ReturnBodyNoteDto } from '../services/api/Notes/dtos/ReturnBodyNoteDto';

interface INoteContext {
  notes: NoteEntity[];
  activeNote: NoteEntity | null;
  setActiveNote: Dispatch<SetStateAction<NoteEntity | null>>;
  createNote: () => Promise<void>;
  getNotes: () => Promise<void>;
  searchNotes: (query: string) => Promise<void>;
  searchBodyNotes: () => Promise<ReturnBodyNoteDto[] | undefined>;
  deleteNote: (id: string) => Promise<void>;
  updateNote: (id: string, body: UpdateNoteDto) => Promise<void>;
}

export const NoteContext = createContext({} as INoteContext);

export const NoteProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<NoteEntity[]>([]);
  const [activeNote, setActiveNote] = useState<NoteEntity | null>(null);
  const timeoutRef = useRef<number>();

  const getNotes = async () => {
    try {
      const dataNotes = (await NoteService.index()).reverse();

      if (dataNotes.length > 0) {
        const [note] = dataNotes;
        setActiveNote(note);
      }

      setNotes(dataNotes);
    } catch (error) {
      console.log(error);
    }
  };

  const searchNotes = async (query: string) => {
    try {
      const dataNotes = (await NoteService.search(query)).reverse();

      if (dataNotes.length > 0) {
        const [note] = dataNotes;
        setActiveNote(note);
      }

      setNotes(dataNotes);
    } catch (error) {
      console.log(error);
    }
  };

  const searchBodyNotes = async () => {
    try {
      return await NoteService.searchBodies();
    } catch (error) {
      console.log(error);
    }
  };

  const createNote = async () => {
    try {
      await NoteService.create();
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (id: string, body: UpdateNoteDto) => {
    try {
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(async () => {
        const note = await NoteService.update(id, body);

        const index = notes.findIndex((note) => note._id === id);
        const updatedNotes = [...notes];

        updatedNotes[index] = note;

        setNotes(updatedNotes);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id: string) => {
    try {
      await NoteService.delete(id);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);
  return (
    <NoteContext.Provider
      value={{
        notes,
        activeNote,
        setActiveNote,
        getNotes,
        searchNotes,
        searchBodyNotes,
        createNote,
        deleteNote,
        updateNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

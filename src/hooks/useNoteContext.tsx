import { useContext } from 'react';
import { NoteContext } from '../contexts/NoteContext';

export const useNoteContext = () => useContext(NoteContext);

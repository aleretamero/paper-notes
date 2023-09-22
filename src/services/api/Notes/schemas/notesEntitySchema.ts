import { Schema, ZodTypeDef, z } from 'zod';
import { NoteEntity } from '../entity/NoteEntity';
import { noteEntitySchema } from './noteEntitySchema';

interface INotesEntitySchema extends Omit<NoteEntity, 'createdAt'> {
  createdAt: string;
}

export const notesEntitySchema: Schema<
  NoteEntity[],
  ZodTypeDef,
  INotesEntitySchema[]
> = z.array(noteEntitySchema);

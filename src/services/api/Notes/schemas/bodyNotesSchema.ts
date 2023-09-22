import { Schema, z } from 'zod';
import { ReturnBodyNoteDto } from '../dtos/ReturnBodyNoteDto';

export const bodyNotesSchema: Schema<ReturnBodyNoteDto[]> = z.array(
  z.object({
    _id: z.string(),
    body: z.string(),
  })
);

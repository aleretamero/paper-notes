import { Schema, ZodTypeDef, z } from 'zod';
import { NoteEntity } from '../entity/NoteEntity';
import dayjs from 'dayjs';

interface INoteEntitySchema extends Omit<NoteEntity, 'createdAt'> {
  createdAt: string;
}

export const noteEntitySchema: Schema<
  NoteEntity,
  ZodTypeDef,
  INoteEntitySchema
> = z.object({
  _id: z.string(),
  title: z.string(),
  body: z.string(),
  author: z.string(),
  createdAt: z.string().transform((date) => dayjs(date).toDate()),
});

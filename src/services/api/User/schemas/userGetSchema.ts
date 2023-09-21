import { Schema, z } from 'zod';
import { ReturnGetUserDto } from '../dtos/ReturnGetUserDto';

export const userGetSchema: Schema<ReturnGetUserDto> = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
});

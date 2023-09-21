import { Schema, z } from 'zod';
import { ReturnLoginUserDto } from '../dtos/ReturnLoginUserDto';

export const userLoginSchema: Schema<ReturnLoginUserDto> = z.object({
  user: z.object({
    _id: z.string(),
    name: z.string(),
    email: z.string(),
  }),
  token: z.string(),
});

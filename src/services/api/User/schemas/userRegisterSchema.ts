import { Schema, z } from 'zod';
import { ReturnRegisterUserDto } from '../dtos/ReturnRegisterUserDto';

export const userRegisterSchema: Schema<ReturnRegisterUserDto> = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
});

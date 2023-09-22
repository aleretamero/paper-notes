import { Schema, z } from 'zod';
import { ReturnLoginUserDto } from '../dtos/ReturnLoginUserDto';
import { userEntitySchema } from './userEntitySchema';

export const userLoginSchema: Schema<ReturnLoginUserDto> = z.object({
  user: userEntitySchema,
  token: z.string(),
});

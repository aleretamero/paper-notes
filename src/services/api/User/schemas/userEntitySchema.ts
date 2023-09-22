import { Schema, z } from 'zod';
import { UserEntity } from '../entity/UserEntity';

export const userEntitySchema: Schema<UserEntity> = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
});

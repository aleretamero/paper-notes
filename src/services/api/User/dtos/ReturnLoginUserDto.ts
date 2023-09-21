import { UserEntity } from '../entity/UserEntity';

export interface ReturnLoginUserDto {
  user: UserEntity;
  token: string;
}

import { Api } from '../Api';
import { LoginUserDto } from './dtos/LoginUserDto';
import { RegisterUserDto } from './dtos/RegisterUserDto';

import { ReturnLoginUserDto } from './dtos/ReturnLoginUserDto';
import { UserEntity } from './entity/UserEntity';
import { userEntitySchema } from './schemas/userEntitySchema';

import { userLoginSchema } from './schemas/userLoginSchema';

export class UserService {
  private static readonly api = Api;

  static readonly register = async (
    body: RegisterUserDto
  ): Promise<UserEntity> => {
    const { data } = await this.api.post('/users/register/', body);

    return userEntitySchema.parse(data);
  };

  static readonly login = async (
    body: LoginUserDto
  ): Promise<ReturnLoginUserDto> => {
    const { data } = await this.api.post('/users/login/', body);

    return userLoginSchema.parse(data);
  };

  static readonly getUser = async (): Promise<UserEntity> => {
    const { data } = await this.api.get('/users/show');

    return userEntitySchema.parse(data);
  };
}

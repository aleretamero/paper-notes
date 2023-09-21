import { Api } from '../Api';
import { LoginUserDto } from './dtos/LoginUserDto';
import { RegisterUserDto } from './dtos/RegisterUserDto';
import { ReturnGetUserDto } from './dtos/ReturnGetUserDto';
import { ReturnLoginUserDto } from './dtos/ReturnLoginUserDto';
import { ReturnRegisterUserDto } from './dtos/ReturnRegisterUserDto';
import { userGetSchema } from './schemas/userGetSchema';
import { userLoginSchema } from './schemas/userLoginSchema';
import { userRegisterSchema } from './schemas/userRegisterSchema';

export class UserService {
  private readonly api = Api;

  register = async (body: RegisterUserDto): Promise<ReturnRegisterUserDto> => {
    const { data } = await this.api.post('/users/register/', body);

    return userRegisterSchema.parse(data);
  };

  login = async (body: LoginUserDto): Promise<ReturnLoginUserDto> => {
    const { data } = await this.api.post('/users/login/', body);

    return userLoginSchema.parse(data);
  };

  getUser = async (token: string): Promise<ReturnGetUserDto> => {
    this.api.defaults.headers.common.Authorization = token;
    const { data } = await this.api.get('/users/show');

    return userGetSchema.parse(data);
  };
}

export const userService = new UserService();

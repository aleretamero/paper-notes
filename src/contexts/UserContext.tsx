import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { useNavigate } from 'react-router-dom';

import { UserService } from '../services/api/User/UsersService';
import { RegisterUserDto } from '../services/api/User/dtos/RegisterUserDto';
import { LoginUserDto } from '../services/api/User/dtos/LoginUserDto';
import { UserEntity } from '../services/api/User/entity/UserEntity';
import { TokenService } from '../services/api/Token/TokenService';

interface IUserContext {
  userRegister: (body: RegisterUserDto) => Promise<void>;
  userLogin: (body: LoginUserDto) => Promise<void>;
  userLogout: () => void;
  dataUser: UserEntity | null;
  error: null | string;
  loading: boolean;
  login: boolean;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [dataUser, setDataUser] = useState<UserEntity | null>(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const userRegister = async (body: RegisterUserDto): Promise<void> => {
    setError(null);
    setLoading(true);

    try {
      await UserService.register(body);

      userLogin({ email: body.email, password: body.password });
    } catch (error) {
      if (error instanceof Error && error.message) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (body: LoginUserDto): Promise<void> => {
    setError(null);
    setLoading(true);

    try {
      const data = await UserService.login(body);

      TokenService.save(data.token);

      setDataUser(data.user);
      setLogin(true);

      navigate('/notes', { replace: true });
    } catch (error) {
      if (error instanceof Error && error.message) {
        setError(error.message);
      }

      userLogout();
    } finally {
      setLoading(false);
    }
  };

  const userLogout = useCallback(() => {
    setDataUser(null);
    setError(null);
    setLoading(false);
    setLogin(false);

    TokenService.remove();
  }, []);

  const getUser = useCallback(async () => {
    setError(null);
    setLoading(true);

    try {
      const data = await UserService.getUser();

      setDataUser(data);
      setLogin(true);

      navigate('/notes', { replace: true });
    } catch (error) {
      if (error instanceof Error && error.message) {
        setError(error.message);
      }
      userLogout();
    } finally {
      setLoading(false);
    }
  }, [userLogout, navigate]);

  useEffect(() => {
    const autoLogin = async () => {
      const token = TokenService.get();

      if (token) {
        TokenService.save(token);
        await getUser();
      } else userLogout();
    };

    autoLogin();
  }, [getUser, userLogout]);

  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        userLogout,
        dataUser,
        error,
        loading,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

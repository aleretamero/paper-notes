import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';

import { useNavigate } from 'react-router-dom';

import { userService } from '../services/api/User/UsersService';
import { RegisterUserDto } from '../services/api/User/dtos/RegisterUserDto';
import { LoginUserDto } from '../services/api/User/dtos/LoginUserDto';
import { UserEntity } from '../services/api/User/entity/UserEntity';

interface IUserContext {
  userRegister: (body: RegisterUserDto) => Promise<void>;
  userLogin: (body: LoginUserDto) => Promise<void>;
  userLogout: () => void;
  dataUser: UserEntity | null;
  error: null | string;
  loading: boolean;
  login: boolean;
  token: string | null;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [dataUser, setDataUser] = useState<UserEntity | null>(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = useRef<string | null>(null);

  const navigate = useNavigate();

  const userRegister = async (body: RegisterUserDto): Promise<void> => {
    setError(null);
    setLoading(true);

    try {
      await userService.register(body);

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
      const data = await userService.login(body);

      localStorage.setItem('@token-paper-notes', data.token);
      token.current = data.token;

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
    token.current = null;

    localStorage.removeItem('@token-paper-notes');
  }, []);

  const getUser = useCallback(
    async (token: string) => {
      setError(null);
      setLoading(true);

      try {
        const data = await userService.getUser(token);

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
    },
    [userLogout, navigate]
  );

  useEffect(() => {
    const autoLogin = async () => {
      token.current = localStorage.getItem('@token-paper-notes');

      if (token.current) await getUser(token.current);
      else userLogout();
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
        token: token?.current,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

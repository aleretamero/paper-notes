import { useUserContext } from '../../hooks/useUserContext';
import { Navigate } from 'react-router-dom';

interface IPublicRouterProps {
  element: JSX.Element;
}

export const PublicRouter = ({ element }: IPublicRouterProps): JSX.Element => {
  const { login } = useUserContext();

  return login ? <Navigate to="/" /> : element;
};

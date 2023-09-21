import { useUserContext } from '../../hooks/useUserContext';
import { Navigate } from 'react-router-dom';

interface IPrivateRouterProps {
  element: JSX.Element;
}

export const PrivateRouter = ({
  element,
}: IPrivateRouterProps): JSX.Element => {
  const { login } = useUserContext();

  return login ? element : <Navigate to="/" />;
};

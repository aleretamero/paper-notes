import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { UserProvider } from '../contexts/UserContext';

export const Layout = () => {
  return (
    <UserProvider>
      <Header />
      <Outlet />
    </UserProvider>
  );
};

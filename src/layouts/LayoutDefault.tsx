import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { UserProvider } from '../contexts/UserContext';
import { SidebarProvider } from '../contexts/SidebarContext';

export const LayoutDefault = () => {
  return (
    <UserProvider>
      <SidebarProvider>
        <Header />
        <Outlet />
      </SidebarProvider>
    </UserProvider>
  );
};

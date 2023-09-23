import { useUserContext } from '../hooks/useUserContext';
import { Navbar } from './Navbar';
import { ButtonMenuBurger } from './ButtonMenuBurger';
import { useMedia } from '../hooks/useMedia';
import { useSidebarContext } from '../hooks/useSidebarContext';
import { Logo } from './Logo';
import { BiMenuAltLeft, BiMenuAltRight } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Header = () => {
  const { pathname } = useLocation();
  const { login } = useUserContext();
  const mobile = useMedia();

  const { setStatusSideBar, statusSideBar } = useSidebarContext();
  const [activeDropdown, setActiveDropdown] = useState(false);

  const handleDropdown = () => {
    setActiveDropdown((currentStatus) => !currentStatus);
  };

  useEffect(() => {
    if (!mobile) setActiveDropdown(false);
  }, [mobile]);

  useEffect(() => {
    setActiveDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`
        w-full h-20 auto-padding
        flex justify-between items-center
        border-black border-b-4
        ${login ? 'bg-violet-400 dark:bg-violet-950' : 'bg-zinc-100'}`}
    >
      {mobile && pathname === '/notes' && (
        <ButtonMenuBurger
          onClick={() => setStatusSideBar((currentStatus) => !currentStatus)}
          active={statusSideBar}
        >
          <BiMenuAltLeft />
        </ButtonMenuBurger>
      )}

      <Logo to={login ? '/notes' : '/'} onlyIcon={!!mobile} />

      {mobile && (
        <Navbar type={activeDropdown ? 'openDropdown' : 'closedDropdown'} />
      )}
      {!mobile && <Navbar type="normal" />}

      {mobile && (
        <ButtonMenuBurger onClick={handleDropdown} active={activeDropdown}>
          <BiMenuAltRight />
        </ButtonMenuBurger>
      )}
    </header>
  );
};

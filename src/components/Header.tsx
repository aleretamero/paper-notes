import logo from '../assets/images/logo.png';

import { useMedia } from '../hooks/useMedia';

import { Link } from 'react-router-dom';
import { Image, ButtonLink, Button } from '.';
import { MenuBurger } from './MenuBurger';
import { useUserContext } from '../hooks/useUserContext';

export const Header = () => {
  const { login, userLogout } = useUserContext();
  const mobile = useMedia('(max-width: 48rem)');

  return (
    <header
      className="
        w-full h-20 bg-zinc-200 auto-padding
        flex justify-between gap-4 items-center
      "
    >
      <Link to={login ? '/notes' : '/'}>
        <Image src={logo} alt="logo" className="w-14" />
      </Link>

      {mobile && <MenuBurger />}
      <nav className="flex gap-4 items-center">
        {login ? (
          <>
            <ButtonLink to="/users">Usuário</ButtonLink>
            <Button onClick={userLogout}>Sair</Button>
          </>
        ) : (
          <>
            <ButtonLink to="/register">Registrar</ButtonLink>
            <ButtonLink to="/login">Entrar</ButtonLink>
          </>
        )}
      </nav>
    </header>
  );
};

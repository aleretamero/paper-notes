import * as Styled from './styles';
import logo from '../../assets/images/logo.png';

import { useMedia } from '../../hooks/useMedia';

import { Link } from 'react-router-dom';
import { Image, ButtonLink, Button } from '..';
import { MenuBurger } from './MenuBurger';
import { useUserContext } from '../../hooks/useUserContext';

export const Header = () => {
  const { login, userLogout } = useUserContext();
  const mobile = useMedia('(max-width: 48rem)');

  return (
    <Styled.Container className="auto-padding">
      <Link to={login ? '/notes' : '/'}>
        <Image src={logo} alt="logo" maxwidth={15} />
      </Link>

      {mobile && <MenuBurger />}
      <Styled.Navbar>
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
      </Styled.Navbar>
    </Styled.Container>
  );
};

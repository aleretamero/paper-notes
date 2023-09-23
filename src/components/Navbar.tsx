import { VariantProps, tv } from 'tailwind-variants';
import { Button, ButtonLink } from '.';
import { useUserContext } from '../hooks/useUserContext';

const variantsNavbar = tv({
  base: 'z-50',
  variants: {
    type: {
      normal: 'flex gap-4 items-center',
      closedDropdown: [
        'absolute left-0 right-0 top-20 ',
        'py-8 px-[max(calc((100%-40rem)/2),1rem)]',
        'bg-zinc-100 dark:bg-zinc-900',
        'flex justify-center flex-col gap-4',
        'border-black border-b-4',
        'transition-transform translate-x-full opacity-0',
      ],
      openDropdown: [
        'absolute left-0 right-0 top-20 ',
        'py-8 px-[max(calc((100%-40rem)/2),1rem)]',
        'bg-zinc-100 dark:bg-zinc-900',
        'flex justify-center flex-col gap-4',
        'border-black border-b-4',
        'transition-transform translate-x-0 opacity-1',
      ],
    },
  },
});

interface INavbarProps extends VariantProps<typeof variantsNavbar> {
  type: 'normal' | 'closedDropdown' | 'openDropdown';
}

export const Navbar = ({ type }: INavbarProps) => {
  const { userLogout, login } = useUserContext();

  return (
    <nav className={variantsNavbar({ type })}>
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
  );
};

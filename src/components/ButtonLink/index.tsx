import * as Styled from './styles';
112916;
import { Link } from 'react-router-dom';

import { ReactNode, ComponentPropsWithRef } from 'react';

interface IButtonProps extends ComponentPropsWithRef<typeof Link> {
  to: string;
  children: ReactNode;
}

export const ButtonLink = ({ to, children, ...props }: IButtonProps) => {
  return (
    <Styled.Button {...props} to={to}>
      {children}
    </Styled.Button>
  );
};

import * as Styled from './styles';

import { ReactNode, ComponentPropsWithRef } from 'react';

interface IButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: IButtonProps) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

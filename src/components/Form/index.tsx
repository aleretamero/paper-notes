import * as Styled from './styles';
import { ComponentPropsWithRef, ReactNode } from 'react';

interface IFormProps extends ComponentPropsWithRef<'form'> {
  children: ReactNode;
}

export const Form = ({ children, ...props }: IFormProps) => {
  return <Styled.Form {...props}>{children}</Styled.Form>;
};

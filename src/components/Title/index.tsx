import * as Styled from './styles';
import { ReactNode, ComponentProps } from 'react';

interface ITitleProps extends ComponentProps<typeof Styled.Title> {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/ban-types
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | (string & {});
}

export const Title = ({ tag = 'h2', children, ...props }: ITitleProps) => {
  return (
    <Styled.Title as={tag} {...props}>
      {children}
    </Styled.Title>
  );
};

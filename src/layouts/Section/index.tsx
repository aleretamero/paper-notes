import * as Styled from './styles';
import { ComponentPropsWithRef, ReactNode } from 'react';

interface ISectionProps
  extends ComponentPropsWithRef<'section'>,
    Styled.IContainerProps {
  children: ReactNode;
}

export const Section = ({ children, ...props }: ISectionProps) => {
  return (
    <Styled.Container {...props} className="auto-padding">
      {children}
    </Styled.Container>
  );
};

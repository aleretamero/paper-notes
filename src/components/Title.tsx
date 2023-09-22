import { ReactNode } from 'react';

interface ITitleProps {
  children: ReactNode;
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Title = ({ Tag = 'h2', children, ...props }: ITitleProps) => {
  return (
    <Tag className="text-5xl font-[Grandstander]" {...props}>
      {children}
    </Tag>
  );
};

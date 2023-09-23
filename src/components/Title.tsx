import { ReactNode, ComponentPropsWithRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const variants = tv({
  base: 'text-5xl font-[Grandstander] font-bold',
  variants: {
    size: {
      sm: 'text-2xl',
      md: 'text-4xl',
      lg: 'text-7xl',
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

interface ITitleProps
  extends VariantProps<typeof variants>,
    ComponentPropsWithRef<'h1'> {
  children: ReactNode;
  Tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Title = ({
  Tag = 'h2',
  className,
  children,
  size,
  ...props
}: ITitleProps) => {
  return (
    <Tag className={variants({ className, size })} {...props}>
      {children}
    </Tag>
  );
};

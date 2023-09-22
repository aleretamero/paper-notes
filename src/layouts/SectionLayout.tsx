import { ComponentPropsWithRef, ReactNode } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const section = tv({
  base: [
    'w-full min-h-[calc(100vh_-_5rem)] relative auto-padding',
    'flex flex-col items-center justify-center gap-20',
  ],
});

interface LayoutSection
  extends VariantProps<typeof section>,
    ComponentPropsWithRef<'section'> {
  children: ReactNode;
}

export const LayoutSection = ({
  children,
  className,
  ...props
}: LayoutSection) => {
  return (
    <section className={section({ className })} {...props}>
      {children}
    </section>
  );
};

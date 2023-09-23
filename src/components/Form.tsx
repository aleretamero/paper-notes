import { ComponentPropsWithRef, ReactNode } from 'react';

interface IFormProps extends ComponentPropsWithRef<'form'> {
  children: ReactNode;
}

export const Form = ({ children, ...props }: IFormProps) => {
  return (
    <form
      className="
        flex justify-center gap-12 flex-col
        max-w-4xl w-full py-16 px-8 md:px-16 bg-zinc-100
        shadow-[6px_6px] shadow-black
        border-2 border-solid border-black text
        [&_button]:h-16 [&_button]:text-xl
      "
      {...props}
    >
      {children}
    </form>
  );
};

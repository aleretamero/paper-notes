import { ComponentPropsWithRef, ReactNode } from 'react';

interface IFormProps extends ComponentPropsWithRef<'form'> {
  children: ReactNode;
}

export const Form = ({ children, ...props }: IFormProps) => {
  return (
    <form
      className="
        flex justify-center gap-8 flex-col
        max-w-3xl w-full p-5 bg-slate-200
        rounded-lg shadow-[4px_4px] shadow-zinc-900
        border-2 border-solid border-zinc-900
      "
      {...props}
    >
      {children}
    </form>
  );
};

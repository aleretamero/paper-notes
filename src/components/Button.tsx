import { ReactNode, ComponentPropsWithRef } from 'react';

interface IButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
}

export function Button({ children, ...props }: IButtonProps) {
  return (
    <button
      className="
        flex justify-center items-center
        px-10 h-12 rounded-sm border-2 border-solid border-zinc-900
        text-base font-bold leading-none text-zinc-900 bg-zinc-100
        shadow-[4px_4px] shadow-black cursor-pointer
        active:shadow-none active:translate-x-[3px] active:translate-y-[3px]
        hover:bg-slate-50
      "
      {...props}
    >
      {children}
    </button>
  );
}

import { ComponentPropsWithRef, ReactNode } from 'react';

interface IButtonMenuBurgerProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  active: boolean;
}

export const ButtonMenuBurger = ({
  children,
  active,
  ...props
}: IButtonMenuBurgerProps) => {
  return (
    <button
      aria-controls="logo-sidebar"
      type="button"
      className={`
        inline-flex items-center p-2 text-5xl text-gray-500 
        rounded-lg hover:bg-gray-100 focus:outline-none 
        focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
        dark:hover:bg-gray-700 dark:focus:ring-gray-600
        ${active ? 'ring-2 ring-gray-200 dark:ring-gray-600 outline-none' : ''}
      `}
      {...props}
    >
      <span className="sr-only">Abrir Menu</span>
      {children}
    </button>
  );
};

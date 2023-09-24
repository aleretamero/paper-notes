import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg';

interface IMenuEditingItemProps {
  icon: string;
  title: string;
  action: () => boolean;
  isActive: (() => boolean) | undefined;
}

export const MenuEditingItem = ({
  icon,
  title,
  action,
  isActive = undefined,
}: IMenuEditingItemProps) => (
  <button
    className={`
      menu-item 
      ${isActive?.() ? 'bg-zinc-200 text-black' : 'bg-transparent'}
      text-white border-none hover:bg-zinc-200 hover:text-black
      p-4 rounded-md cursor-pointer
      flex justify-center items-center 
      [&_svg]:text-2xl
    `}
    onClick={action}
    title={title}
  >
    <svg className="remix fill-current h-8 w-8">
      <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
    </svg>
  </button>
);

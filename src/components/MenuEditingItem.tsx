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
      ${isActive?.() ? 'bg-zinc-200' : 'bg-transparent'}
      text-white border-none hover:bg-zinc-200
      w-10 h-10 p-1 rounded-md cursor-pointer
    `}
    onClick={action}
    title={title}
  >
    <svg className="remix w-full h-full fill-current">
      <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
    </svg>
  </button>
);

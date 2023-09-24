import { Editor } from '@tiptap/react';

import { MenuEditingItem } from './MenuEditingItem';
import { getDataItemsMenuBar } from '../mocks/getDataItemsMenuBar';

interface IMenuEditingBarProps {
  editor: Editor;
}

export const MenuEditingBar = ({ editor }: IMenuEditingBarProps) => {
  const items = getDataItemsMenuBar(editor);

  return (
    <div
      className="
        w-full bg-zinc-900 p-2
        flex flex-wrap items-center gap-4
        border-b-4 border-black
      "
    >
      {items.map((item, index) => (
        <MenuEditingItem
          key={`${item.title}-${index}`}
          icon={item.icon}
          action={item.action}
          isActive={item.isActive}
          title={item.title}
        />
      ))}
    </div>
  );
};

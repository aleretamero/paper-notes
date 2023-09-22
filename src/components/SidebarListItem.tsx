import dayjs from 'dayjs';
import { ComponentPropsWithRef } from 'react';
import { FaTrash } from 'react-icons/fa';
import { htmlInnerText } from '../helpers/regex/htmlInnerText';

interface ISidebarListItemProps extends ComponentPropsWithRef<'li'> {
  title: string;
  body: string;
  date: Date;
  active: boolean;
  deleteNote: () => Promise<void>;
}

export const SidebarListItem = ({
  title,
  body,
  date,
  active,
  deleteNote,
  ...props
}: ISidebarListItemProps) => {
  return (
    <li
      {...props}
      style={{ background: active ? 'var(--primary-dark)' : '#ccc' }}
      className="
        flex flex-col justify-center gap-4
        p-4 cursor-pointer
        border-b-2 border-solid border-zinc-900
        first:border-t-2 first:border-solid first:border-zinc-900
      "
    >
      <h3 className="text-2xl font-[Grandstander]">
        {title.length > 18 ? title.substring(0, 16) + '...' : title}
      </h3>
      <p>
        {body.length > 35
          ? body.replace(htmlInnerText, ' ').substring(0, 35) + '...'
          : body.replace(htmlInnerText, ' ')}
      </p>
      <div
        className="
          flex justify-between items-center w-full
          [&_svg]:fill-zinc-900 [&_svg]:p-1
          [&_svg]:text-4xl [&_svg]:z-10
        "
      >
        <span
          className="
            text-sm text-zinc-200
            bg-zinc-900 p-2 rounded
          "
        >
          {dayjs(date).format('DD-MM')}
        </span>

        <FaTrash onClick={deleteNote} />
      </div>
    </li>
  );
};

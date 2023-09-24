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
      className={`
        flex flex-col justify-center gap-6
        p-6 cursor-pointer
        border-b-4 border-black
        bg-violet-400 dark:bg-violet-950
        ${active ? 'dark:bg-violet-400 bg-violet-950' : ''}
      `}
    >
      <h3
        className={`
          text-3xl leading-none font-[Grandstander]
          text-zinc-900 dark:text-zinc-100
          ${active ? 'dark:text-zinc-900 text-zinc-100' : ''}
        `}
      >
        {title.length > 18 ? title.substring(0, 16) + '...' : title}
      </h3>
      <p
        className={`
          text-zinc-900 dark:text-zinc-100 font-['Roboto Flex']
          ${active ? 'dark:text-zinc-900 text-zinc-100' : ''}
        `}
      >
        {body.length > 35
          ? body.replace(htmlInnerText, ' ').substring(0, 35) + '...'
          : body.replace(htmlInnerText, ' ')}
      </p>
      <div
        className="
          flex justify-between items-center w-full
          [&_svg]:fill-zinc-900 [&_svg]:p-1
          [&_svg]:text-5xl [&_svg]:z-10
        "
      >
        <span
          className="
            text-base font-bold
            text-zinc-100 bg-zinc-900 
            p-3 rounded
          "
        >
          {dayjs(date).format('DD-MM')}
        </span>

        <FaTrash onClick={deleteNote} />
      </div>
    </li>
  );
};

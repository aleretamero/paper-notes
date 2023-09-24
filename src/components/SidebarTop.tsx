import { SideBarSearch, Button } from '.';
import { useNoteContext } from '../hooks/useNoteContext';
import { BiPlusMedical } from 'react-icons/bi';

export const SidebarTop = () => {
  const { notes, createNote } = useNoteContext();

  return (
    <div
      className="
        flex flex-col gap-8
        p-6 w-full 
        border-b-4 border-black
      "
    >
      <SideBarSearch />
      <div className="w-full flex justify-between items-center">
        <span
          className="
            text-3xl font-bold font-[Grandstander] 
            text-zinc-900 dark:text-zinc-100
          "
        >
          {notes?.length ?? 0} {notes?.length === 1 ? 'Nota' : 'Notas'}
        </span>
        <Button onClick={createNote}>
          <span className="inline-block mr-2 text-lg">Nota</span>
          <BiPlusMedical />
        </Button>
      </div>
    </div>
  );
};

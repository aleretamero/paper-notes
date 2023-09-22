import { SidebarListItem } from './SidebarListItem';
import { SideBarSearch } from './SideBarSearch';

import { Button } from './Button';
import { useNoteContext } from '../hooks/useNoteContext';

export const Sidebar = () => {
  const { notes, activeNote, setActiveNote, createNote, deleteNote } =
    useNoteContext();

  return (
    <aside
      className="
        flex gap-1 flex-col resize-x
        h-[calc(100vh_-_5rem)] w-80 bg-zinc-200
        border-r-4 border-solid border-zinc-900
      "
    >
      <div className="flex flex-col gap-6 p-4 w-full">
        <SideBarSearch />
        <div className="w-full flex justify-between items-center">
          <span className="text-3xl font-bold font-[Grandstander]">
            {notes?.length ?? 0} {notes?.length === 1 ? 'Nota' : 'Notas'}
          </span>
          <Button onClick={createNote}>Nota +</Button>
        </div>
      </div>
      <ul className="w-full overflow-y-auto">
        {notes?.length === 0 ? (
          <li style={{ padding: '1rem' }}>Nenhuma nota cadastrada...</li>
        ) : (
          notes.map((note) => (
            <SidebarListItem
              key={note._id}
              title={note.title}
              body={note.body}
              active={note._id === activeNote?._id}
              date={note.createdAt}
              onClick={() => setActiveNote(note)}
              deleteNote={() => deleteNote(note._id)}
            />
          ))
        )}
      </ul>
    </aside>
  );
};

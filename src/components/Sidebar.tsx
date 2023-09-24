import { SidebarListItem } from './SidebarListItem';

import { useNoteContext } from '../hooks/useNoteContext';
import { useSidebarContext } from '../hooks/useSidebarContext';
import { useMedia } from '../hooks/useMedia';
import { SidebarTop } from '.';

export const Sidebar = () => {
  const { statusSideBar } = useSidebarContext();
  const mobile = useMedia();
  const { notes, activeNote, setActiveNote, deleteNote } = useNoteContext();

  return (
    <aside
      className={`
        absolute top-0 left-0 z-40 w-96 h-[calc(100vh_-_5rem)]
        transition-transform  border-r-4 border-black
        flex gap-1 flex-col -translate-x-full
        bg-zinc-100 dark:bg-zinc-900
        ${!statusSideBar ? 'translate-x-0' : ''}
        ${!mobile ? 'translate-x-0 relative' : ''}   
      `}
    >
      <SidebarTop />

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

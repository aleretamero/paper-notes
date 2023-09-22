import { Sidebar, MenuEditing } from '../components';
import { NoteProvider } from '../contexts/NoteContext';

export const Notes = () => {
  return (
    <NoteProvider>
      <div
        className="
          w-full min-h-[calc(100vh_-_5rem)] 
          grid grid-cols-[max-content_1fr]
        "
      >
        <Sidebar />
        <MenuEditing />
      </div>
    </NoteProvider>
  );
};

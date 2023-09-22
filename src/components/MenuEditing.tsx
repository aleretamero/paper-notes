import { MenuEditingBar } from './MenuEditingBar';

import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import { EditorContent, useEditor } from '@tiptap/react';
import { useNoteContext } from '../hooks/useNoteContext';
import { htmlInnerText } from '../helpers/regex/htmlInnerText';
import { htmlFirstTag } from '../helpers/regex/htmlFistTag';

export const MenuEditing = () => {
  const { activeNote, updateNote } = useNoteContext();

  const editor = useEditor(
    {
      extensions: [StarterKit, Highlight, TaskList, TaskItem],

      content: activeNote?.body,
      onUpdate: ({ editor }) => {
        if (!activeNote) return;

        updateNote(activeNote._id, {
          title:
            editor
              .getHTML()
              .match(htmlFirstTag)?.[0]
              ?.replace(htmlInnerText, '') ?? activeNote.title,
          body: editor.getHTML(),
        });
      },
    },
    [activeNote]
  );

  return (
    <main className="flex flex-col w-full h-[calc(100vh_-_5rem)]">
      {editor && <MenuEditingBar editor={editor} />}
      <EditorContent
        editor={editor}
        className="prose bg-slate-50
          overflow-y-auto w-full h-full
          border-none outline-none p-6 flex-1
          [type='checkbox']
        "
      />
    </main>
  );
};

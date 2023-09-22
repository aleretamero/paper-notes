import { Editor } from '@tiptap/react';

export const getDataItemsMenuBar = (editor: Editor) => [
  {
    icon: 'bold',
    title: 'Negrito',
    action: () => editor.chain().focus().toggleBold().run(),
    isActive: () => editor.isActive('bold'),
  },
  {
    icon: 'italic',
    title: 'Itálico',
    action: () => editor.chain().focus().toggleItalic().run(),
    isActive: () => editor.isActive('italic'),
  },
  {
    icon: 'strikethrough',
    title: 'Strike',
    action: () => editor.chain().focus().toggleStrike().run(),
    isActive: () => editor.isActive('strike'),
  },
  {
    icon: 'code-view',
    title: 'Code',
    action: () => editor.chain().focus().toggleCode().run(),
    isActive: () => editor.isActive('code'),
  },
  {
    icon: 'mark-pen-line',
    title: 'Highlight',
    action: () => editor.chain().focus().toggleHighlight().run(),
    isActive: () => editor.isActive('highlight'),
  },

  {
    icon: 'h-1',
    title: 'Titulo',
    action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: () => editor.isActive('heading', { level: 1 }),
  },
  {
    icon: 'h-2',
    title: 'SubTitulo',
    action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: () => editor.isActive('heading', { level: 2 }),
  },
  {
    icon: 'paragraph',
    title: 'Paragrafo',
    action: () => editor.chain().focus().setParagraph().run(),
    isActive: () => editor.isActive('paragraph'),
  },
  {
    icon: 'list-unordered',
    title: 'Bullet List',
    action: () => editor.chain().focus().toggleBulletList().run(),
    isActive: () => editor.isActive('bulletList'),
  },
  {
    icon: 'list-ordered',
    title: 'Lista Ordenada',
    action: () => editor.chain().focus().toggleOrderedList().run(),
    isActive: () => editor.isActive('orderedList'),
  },
  {
    icon: 'list-check-2',
    title: 'Task List',
    action: () => editor.chain().focus().toggleTaskList().run(),
    isActive: () => editor.isActive('taskList'),
  },
  {
    icon: 'code-box-line',
    title: 'Code Block',
    action: () => editor.chain().focus().toggleCodeBlock().run(),
    isActive: () => editor.isActive('codeBlock'),
  },

  {
    icon: 'double-quotes-l',
    title: 'Blockquote',
    action: () => editor.chain().focus().toggleBlockquote().run(),
    isActive: () => editor.isActive('blockquote'),
  },
  {
    icon: 'separator',
    title: 'Horizontal Rule',
    action: () => editor.chain().focus().setHorizontalRule().run(),
  },

  {
    icon: 'text-wrap',
    title: 'Hard Break',
    action: () => editor.chain().focus().setHardBreak().run(),
  },
  {
    icon: 'format-clear',
    title: 'Limpar formatação',
    action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
  },

  {
    icon: 'arrow-go-back-line',
    title: 'Undo',
    action: () => editor.chain().focus().undo().run(),
  },
  {
    icon: 'arrow-go-forward-line',
    title: 'Redo',
    action: () => editor.chain().focus().redo().run(),
  },
];

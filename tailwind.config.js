/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'notes-bg': 'url("./public/image/notes.png")',
      },
    },
  },
  plugins: [typography],
};

/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'notes-bg': 'url("/images/notes.png")',
      },
    },
  },
  plugins: [typography],
};

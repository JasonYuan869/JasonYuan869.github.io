import * as daisyui from 'daisyui';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

import { addIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './svelte.config.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        logo: ['IBM Plex Serif', ...defaultTheme.fontFamily.serif]
      }
    }
  },
  daisyui: {
    themes: ['cupcake', 'dracula']
  },
  plugins: [addIconSelectors(['ic']), typography, daisyui]
};

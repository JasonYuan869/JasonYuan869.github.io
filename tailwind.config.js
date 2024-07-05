import * as daisyui from 'daisyui';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
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
  plugins: [daisyui]
};

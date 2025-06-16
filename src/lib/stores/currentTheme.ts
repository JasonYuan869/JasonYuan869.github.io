import { writable } from 'svelte/store';

const currentTheme = writable<'cupcake' | 'dracula'>('cupcake');
export { currentTheme };

<script lang="ts">
  import MaterialSymbolsDarkMode from '~icons/material-symbols/dark-mode';
  import MaterialSymbolsLightModeOutline from '~icons/material-symbols/light-mode-outline';

  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';
  import { currentTheme } from '$lib/stores/currentTheme';

  const toggleTheme = () => {
    if ($currentTheme === 'dracula') {
      $currentTheme = 'cupcake';
    } else if ($currentTheme === 'cupcake') {
      $currentTheme = 'dracula';
    }

    console.log('current theme: ', $currentTheme);
  };
  onMount(() => {
    themeChange(false);

    $currentTheme = (localStorage.getItem('theme') as 'cupcake' | 'dracula') || 'cupcake';
  });
</script>

<!-- Header -->
<nav class="container mx-auto flex max-w-3xl items-center justify-between p-6">
  <div class="grow">
    <a class="font-logo text-left text-2xl font-bold md:text-4xl lg:text-5xl" href="/">Jason Yuan</a
    >
  </div>

  <!-- Links -->
  <div class="flex grow justify-end gap-4">
    <a href="/posts" class="link-hover link">Posts</a>
    <a target="_blank" href="https://github.com/JasonYuan869" class="link-hover link">GitHub</a>
    <label class="swap swap-rotate" data-toggle-theme="dracula,cupcake">
      <input
        type="checkbox"
        on:change={toggleTheme}
        data-toggle-theme="cupcake,dracula"
        value="dracula"
        class="theme-controller text-xl"
      />
      <MaterialSymbolsDarkMode class="swap-on" />
      <MaterialSymbolsLightModeOutline class="swap-off" />
    </label>
  </div>
</nav>

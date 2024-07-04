<script lang="ts">
  import MaterialSymbolsDarkMode from '~icons/material-symbols/dark-mode';
  import MaterialSymbolsLightModeOutline from '~icons/material-symbols/light-mode-outline';
  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';

  let currentTheme: 'dracula' | 'cupcake';
  const toggleTheme = () => {
    if (currentTheme === 'dracula') {
      currentTheme = 'cupcake';
    } else if (currentTheme === 'cupcake') {
      currentTheme = 'dracula';
    }
  };
  onMount(() => {
    themeChange(false);

    // @ts-expect-error - localStorage value should be "dracula" or "cupcake"
    currentTheme = localStorage.getItem('theme') || 'cupcake';
  });
</script>

<!-- Header -->
<nav class="container flex mx-auto max-w-3xl items-center justify-between p-6">
  <div class="grow">
    <a class="text-left text-xl font-bold md:text-3xl lg:text-4xl" href="/">Jason Yuan</a>
  </div>

  <!-- Links -->
  <div class="flex grow flex-row-reverse justify-between">
    <a target="_blank" href="https://github.com/JasonYuan869" class="link-hover link">GitHub</a>
  </div>

  <div class="flex flex-row-reverse p-4">
    <button data-toggle-theme="dracula,cupcake" class="text-xl" on:click={toggleTheme}>
      {#if currentTheme === 'dracula'}
        <MaterialSymbolsDarkMode />
      {:else}
        <MaterialSymbolsLightModeOutline />
      {/if}
    </button>
  </div>
</nav>
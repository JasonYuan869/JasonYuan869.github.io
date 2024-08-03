<script lang="ts">
  import { onMount } from 'svelte';
  import MaterialSymbolsRefresh from '~icons/material-symbols/refresh';
  import { type AngleProps, draw, shuffleArray } from './game';

  let reveal = false;

  let containerRefs: Array<HTMLDivElement | null> = [null, null, null, null];
  let canvasRefs: Array<HTMLCanvasElement | null> = [null, null, null, null];

  let baseAngle = Math.random() * 90 + 45;

  let angles: Array<AngleProps> = [];

  const resetAngles = () => {
    reveal = false;
    baseAngle = Math.floor(Math.random() * 90 + 45);
    const baseRotation = Math.random() * 2 * Math.PI;
    const angleValues: Array<number> = [];

    for (let i = 0; i < 4; i++) {
      const angleDifference = Math.floor(Math.random() * 5 + 3);
      const lastAngle = angleValues[angleValues.length - 1] ?? baseAngle;
      angleValues.push(lastAngle + angleDifference);
    }

    shuffleArray(angleValues);

    angles = angleValues.map((angle) => {
      const randomScale = Math.random() * 0.5 + 0.5;
      const randomRotation = baseRotation + (Math.random() * 0.8 + 0.2) * Math.PI;

      return { angle, randomScale, randomRotation };
    });
  };

  const drawAngles = () => {
    for (let i = 0; i < canvasRefs.length; i++) {
      const canvas = canvasRefs[i];
      const ctx = canvas?.getContext('2d');

      if (!canvas || !ctx) return;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      draw(ctx, centerX, centerY, canvas.height * 0.4, angles[i]);
    }
  };

  onMount(() => {
    resetAngles();
    const onResize = () => {
      for (let i = 0; i < canvasRefs.length; i++) {
        const canvas = canvasRefs[i];
        const container = containerRefs[i];

        if (!canvas || !container) return;

        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
      drawAngles();
    };

    window.addEventListener('resize', onResize);

    onResize();

    return () => window.removeEventListener('resize', onResize);
  });
</script>

<main class="flex flex-col items-center justify-center">
  <p class="text-center">Order the following angles from smallest to largest</p>
  <div class="mb-4 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
    {#each Array.from({ length: 4 }, (_, i) => i) as i}
      <div
        bind:this={containerRefs[i]}
        class="relative m-2 h-24 w-24 border border-gray-300 md:h-36 md:w-36"
      >
        {#if angles?.[i]?.angle}
          <div class="absolute left-2 top-2 text-gray-900">{i + 1}</div>
          {#if reveal}
            <div class="absolute bottom-2 left-2 text-gray-900">{angles?.[i]?.angle}°</div>
          {/if}
        {:else}
          <div class="skeleton absolute h-full w-full rounded-none" />
        {/if}
        <canvas bind:this={canvasRefs[i]} />
      </div>
    {/each}
  </div>
  <label class="label cursor-pointer">
    <span class="label-text mx-4">Reveal Solution</span>
    <input type="checkbox" class="toggle" bind:checked={reveal} />
  </label>
  <button
    class="btn btn-accent"
    on:click={() => {
      resetAngles();
      drawAngles();
    }}
  >
    <MaterialSymbolsRefresh />
  </button>
</main>

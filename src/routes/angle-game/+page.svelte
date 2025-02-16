<script lang="ts">
  import { onMount } from 'svelte';
  import MaterialSymbolsRefresh from '~icons/material-symbols/refresh';
  import { type AngleProps, draw, shuffleArray } from './game';
  import { flip } from 'svelte/animate';
  import { dndzone, overrideItemIdKeyNameBeforeInitialisingDndZones } from 'svelte-dnd-action';
  import clsx from 'clsx';
  overrideItemIdKeyNameBeforeInitialisingDndZones('angle');

  let reveal = $state(false);

  let containerRefs: Array<HTMLDivElement | null> = $state([null, null, null, null]);
  let canvasRefs: Array<HTMLCanvasElement | null> = $state([null, null, null, null]);

  let baseAngle = Math.random() * 90 + 45;

  let angles: Array<AngleProps> = $state([]);
  let sortedAngles: Array<AngleProps> = $derived(angles.slice().sort((a, b) => a.angle - b.angle));

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
  $effect(() => {
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

  onMount(() => {
    resetAngles();
  });

  function handleSort(e) {
    angles = e.detail.items;
  }
</script>

<svelte:head>
  <title>Angle Game</title>
</svelte:head>

<main class="flex flex-col items-center justify-center">
  <p class="text-center">Drag to order the following angles from smallest to largest</p>
  <div
    class="mb-4 flex flex-row"
    use:dndzone={{ items: angles, flipDurationMs: 200, dropTargetStyle: { outline: 'none' } }}
    onconsider={handleSort}
    onfinalize={handleSort}
  >
    {#each angles as angle, i (angle.angle)}
      <div
        animate:flip={{ duration: 200 }}
        bind:this={containerRefs[i]}
        class={clsx('relative m-2 h-24 w-24 border md:h-36 md:w-36', {
          'border-gray-300 ': !reveal,
          'border-green-300': reveal && angle.angle === sortedAngles[i].angle,
          'border-red-300': reveal && angle.angle !== sortedAngles[i].angle
        })}
      >
        {#if angle.angle}
          {#if reveal}
            <div class="absolute bottom-2 left-2 text-gray-900">{angle.angle}°</div>
          {/if}
        {:else}
          <div class="skeleton absolute h-full w-full rounded-none"></div>
        {/if}
        <div>
          <canvas bind:this={canvasRefs[i]}></canvas>
        </div>
      </div>
    {/each}
  </div>
  <label class="label cursor-pointer">
    <span class="label-text mx-4">Reveal Solution</span>
    <input type="checkbox" class="toggle" bind:checked={reveal} />
  </label>
  <button
    class="btn btn-accent"
    onclick={() => {
      resetAngles();
      drawAngles();
    }}
  >
    <MaterialSymbolsRefresh />
  </button>
</main>

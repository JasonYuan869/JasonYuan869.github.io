<script lang="ts">
  export let data;

  const dateText = new Date(data.metadata.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
</script>

<svelte:head>
  <title>Jason Yuan - {data.metadata.title}</title>
</svelte:head>

<div class="my-4">
  <p class="text-3xl font-bold leading-relaxed tracking-wide md:text-4xl">{data.metadata.title}</p>
  <p class="text-base-content/50">Published on {dateText}</p>
</div>

<article class="prose">
  <svelte:component this={data.content} />
</article>

<!--<svelte:component this={data.content} />-->

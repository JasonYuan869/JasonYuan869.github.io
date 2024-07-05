<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>Jason Yuan - All Posts</title>
</svelte:head>

<main>
  {#each Object.keys(data.postsByMonth) as month}
    <!-- I'll put this back when there's more posts -->
    <!-- <h2 class="mb-6 mt-8 text-3xl font-bold">{month}</h2> -->

    {#each data.postsByMonth[month] as post}
      <div class="mb-6">
        <a href={post.path} class="link-hover text-xl font-bold md:text-2xl"
          >{post.metadata.title}</a
        >
        <p class="text-base-content/50">
          {new Date(post.metadata.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <p>{post.metadata.description}</p>
      </div>
    {/each}
  {/each}
</main>

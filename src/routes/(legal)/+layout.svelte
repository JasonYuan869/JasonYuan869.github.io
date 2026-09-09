<main class="legal-page">
  <slot />
</main>

<style>
  .legal-page {
    line-height: 1.75;
    overflow-wrap: anywhere;
  }

  .legal-page :global(h1) {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.25;
  }

  .legal-page :global(h2) {
    margin-top: 2rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .legal-page :global(p) {
    margin-top: 1rem;
  }

  .legal-page :global(a) {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
</style>

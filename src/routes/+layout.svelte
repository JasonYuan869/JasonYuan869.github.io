<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="w-full bg-base-100 [&>*]:transition-all">
  <Nav />
  <div class="mx-auto flex flex-col items-center">
    <slot />
  </div>

  <Footer />
</div>


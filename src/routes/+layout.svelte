<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="w-full bg-base-100 *:transition-all">
  <Nav />
  <div class="container mx-auto min-h-[70vh] max-w-3xl p-6">
    <slot />
  </div>
  <Footer />
</div>

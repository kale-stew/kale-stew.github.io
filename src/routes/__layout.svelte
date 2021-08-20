<script>
  import "../app.scss";
  import Nav from "$lib/Nav.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/github.min.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Oxygen"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Fira+Mono"
  />
</svelte:head>

<div class="g-app-wrapper">
  <Nav />
  <div class="g-content-wrapper">
    <slot />
  </div>
  <Footer />
</div>

<style lang="scss">
  .g-app-wrapper {
    margin: 0 auto;
  }

  .g-content-wrapper {
    padding: 0 20%;
    position: absolute;
    top: 78px;
    bottom: 20px;
  }

</style>

<script>
  import "../app.scss";
  import Nav from "$lib/Nav.svelte";
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
  <div class="g-nav-wrapper">
    <Nav />
  </div>
  <div class="g-content-wrapper">
    <slot />
  </div>
</div>

<style lang="scss">
  .g-app-wrapper {
    margin: 0 auto;
  }

  .g-nav-wrapper {
    background: linear-gradient(72deg, #e23500, #ffbc2d);
    height: 78px;
    padding: 0 20%;
  }

  .g-content-wrapper {
    padding: 0 20%;
  }

</style>

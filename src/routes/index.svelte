<script>
  import Card from "$lib/Card.svelte";
  import { update_slot } from "svelte/internal";
</script>

<svelte:head>
  <title>kylieis.online · Home</title>
</svelte:head>

<div class="intro">
  <h1>Kylie is ✨ Online ✨</h1>
  <p>Hello and welcome!</p>
</div>

<div class="cards">
  <Card
    title="Talks"
    subtitle="All of my talks, in one place."
    link="www.kylieis.online/talks"
  />

  <Card
    title="kylies.photos"
    subtitle="Hiking photos and trip reports."
    link="www.kylies.photos"
  />

  <Card
    title="Now"
    subtitle="Recent life updates."
    link="www.kylieis.online/now"
  />
</div>

<style lang="scss">
  .cards {
    display: flex;
  }

  .intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

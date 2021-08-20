<script context="module">
  import { base } from "$app/paths";

  export async function load({ fetch }) {
    const posts = await fetch(`${base}/index.json`).then((r) => r.json());
    return {
      props: { posts },
    };
  }
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>kylieis.online · Blog</title>
</svelte:head>

<div>
  <h1>kylieis.online</h1>
  {#each posts as post}
    <a href={`${base}/${post.slug}`}>
      <h2 class="title">{post.metadata.title}</h2>
      <p class="date">{post.metadata.date}</p>
      <p class="excerpt">{post.metadata.excerpt}</p>
    </a>
  {/each}
</div>

<style lang="scss">
  h1 {
    margin-bottom: 0;
  }

  h2.title {
    margin-top: 2rem;
    margin-bottom: 0.4rem;

    &:hover {
      color: #f58b12;
    }
  }

  p {
    color: #555;
    margin: 0;
  }

  p.excerpt {
    padding-left: 4px;
  }
</style>

<script context="module">
  import { base } from '$app/paths'

  export async function load({ fetch }) {
    const posts = await fetch(`${base}/blog.json`).then((r) => r.json())
    return {
      props: { posts },
    }
  }
</script>

<script>
  export let posts
</script>

<svelte:head>
  <title>kylieis.online · Blog</title>
</svelte:head>

<h1>Blog</h1>
<h4>Long-form Twitter.</h4>

{#each posts as post}
  <div>
    <a href={`${base}/${post.slug}`}>
      <h2 class="title">{post.metadata.title}</h2>
      <p class="labels">
        {post.metadata.date.toUpperCase()}
        {post.metadata.category ? ` ·  ${post.metadata.category}` : ''}
      </p>
      <p class="excerpt">{post.metadata.excerpt}</p>
    </a>
  </div>
{/each}

<style lang="scss">
  h2.title {
    margin-top: 2rem;
    margin-bottom: 0.4rem;

    &:hover {
      color: #f58b12;
    }
  }

  h4 {
    font-size: 17px;
    color: #555;
  }

  .labels {
    display: flex;
    font-size: 13.5px;
    margin-top: 0px;
    padding: 1px 0 0 4px;
  }

  p {
    color: #777;
  }

  p.excerpt {
    font-style: italic;
    margin-top: 0.2rem;
    padding-left: 4px;
    max-width: 37rem;
  }
</style>

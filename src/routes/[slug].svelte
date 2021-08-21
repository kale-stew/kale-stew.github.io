<script context="module">
  import { base } from "$app/paths";

  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const post = await fetch(`${base}/${slug}.json`).then((r) => r.json());
    return {
      props: { post },
    };
  }
</script>

<script>
  export let post;
  let date = post.metadata.date.toUpperCase();
</script>

<svelte:head>
  <title>{post.metadata.title}</title>
</svelte:head>

<div class="post">
  <h1 class="title">{post.metadata.title}</h1>
  <p class="date">{date}</p>
  {@html post.content}
</div>

<style lang="scss">
  .post {
    padding-bottom: 3.8rem;
  }

  h1.title {
    margin: 1.6rem 0 0 0;
  }

  p.date {
    color: #777;
    font-size: 14.5px;
    margin: 0.6rem 0 2.6rem 0;
    padding: 1px 0 0 4px;
  }
</style>

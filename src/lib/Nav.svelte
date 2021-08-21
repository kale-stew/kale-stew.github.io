<script>
  import { base } from "$app/paths";
</script>

<div>
  <nav>
    <a href="{base}/"><h3 class="home">home</h3></a>
    <a href="{base}/blog"><h3 class="blog">blog</h3></a>
    <a href="{base}/about"><h3 class="about">about</h3></a>
  </nav>
</div>

<style lang="scss">
  nav {
    background: linear-gradient(72deg, #e23500, #ffbc2d);
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 78px;
    padding: 0 20%;
  }
  
  a {
    text-decoration: none;
  }
  
  h3 {
    margin-bottom: 0px;
    color: white;
    font-weight: 400;

    &:hover {
      text-decoration: underline;
    }
  }
</style>

<script>
  import Icon from '$lib/Icon.svelte'
</script>

<div class="footer">
  <div class="links">
    <a href="mailto:kylie@kyliestewart.tech">
      <Icon name="paperplane" desription="Click here to send Kylie an email." />
    </a>
    <a href="http://linkedin.com/in/kylieastewart"
      ><Icon
        name="linkedin"
        description="Click here to connect with Kylie on LinkedIn."
      /></a
    >
    <a href="www.twitter.com/kyliestew"
      ><Icon
        name="twitter"
        description="Click here to follow Kylie on Twitter."
      /></a
    >
    <a href="http://instagram.com/kalestews"
      ><Icon
        name="instagram"
        description="Click here to follow Kylie on Instagram."
      /></a
    >
  </div>
</div>

<style lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .links {
    justify-content: center;
    padding-bottom: 1.7rem;
  }

  a {
    font-size: 14px;
    margin: 0 2rem;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
</style>

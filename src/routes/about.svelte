<script>
  // const Gallery = require("svelte-image-gallery");
  // import * as Gallery from 'svelte-image-gallery'

  function handleClick(e) {
    console.log(e.detail.url)
  }
</script>

<svelte:head>
  <title>kylieis.online · About</title>
</svelte:head>

<h1>About Kylie</h1>

<p>
  👋 <b>Hi!</b> I'm Kylie Stewart, a freelance consultant based in Georgetown, Colorado.
</p>

<p>
  Currently, I am a <a href="https://www.notion.so">Notion</a>
  Ambassador that works as a freelance solutions engineer and web developer. If you'd
  like to discuss what working together might look like, please
  <a href="mailto:kylie@kyliestewart.tech">send me an email</a>!
</p>

<p>
  When I'm not on the clock, I spend my time pursuing Colorado's 100 Highest
  Peaks (otherwise known as the Centennials)- often with my fiancé, Kyle, and
  our dog, Otis, both of who are pictured below. I'm about halfway through these
  summits so far!
</p>

<p>
  Prior to freelancing, I was a software engineer and open-source maintainer at
  a Seattle-based Javascript consultancy named <a
    href="https://www.formidable.com">Formidable</a
  >. Before I worked in technology at all, I was a Store Coordinator at
  <a href="https://www.tesla.com">Tesla</a>, a Volunteer Coordinator for a
  Denver-based housing non-profit, and a sommelier-certified bartender.
</p>

<!-- <div class="gallery-wrapper">
  <Gallery on:click={handleClick}>
    <img
      alt="Kylie & Kyle standing on a rocky ledge, overlooking a lake with a hazy view of some mountains beyond that."
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fd71de1a-51d6-41ee-96bf-d77b4bb73ce5/54A7F038-B974-4EAD-B8B1-1571F9D5CE28.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210820T235439Z&X-Amz-Expires=86400&X-Amz-Signature=335ec385f21a2d120b71df4b1179d950d18a36372d9bc70bc611ae548e21e6a1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2254A7F038-B974-4EAD-B8B1-1571F9D5CE28.jpeg%22"
    />
    <img
      alt="A mostly black dog with a white spot on his chest and down his nose, Otis, sitting in a pile of autumn leaves with a single fall leaf resting on the tip of his nose."
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dc160768-bda5-49b5-92ed-b5428dde535d/63EC7503-13E3-4B61-B0F7-2F70D9FD45B2.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210820T235118Z&X-Amz-Expires=86400&X-Amz-Signature=ea64caf59f8e9642b0bee2ed96c091874d5a97d57a56d3cac664f095fccdad8e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%2263EC7503-13E3-4B61-B0F7-2F70D9FD45B2.jpeg%22"
    />
    <img
      alt="A man, Kyle, wearing a hat with a ponytail seen underneath it, facing to look out over a rugged red rock valley."
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e7b26b4d-e214-435d-b166-b8eeae77b143/A08AAFD9-CFBC-4BF5-BA4C-A58D5085ADD3.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210820T234209Z&X-Amz-Expires=86400&X-Amz-Signature=8c43e172f7dd0d2a7de86ac3fe6b481e717f31ae63b372bb863ed8cceb65ca73&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22A08AAFD9-CFBC-4BF5-BA4C-A58D5085ADD3.jpeg%22"
    />
    <img
      alt="A mountain goat looking directly at the camera, standing on red rocks."
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/50b50a52-7345-4df9-a561-04d7c56d6816/C80ABC69-8C7C-47E3-AF9A-2E3D7B106067.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210820T235051Z&X-Amz-Expires=86400&X-Amz-Signature=60f23fabca7c3b12eef1f7da44e8f63044ae3bd1ffb35151dfa7965bcaa05f2b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22C80ABC69-8C7C-47E3-AF9A-2E3D7B106067.jpeg%22"
    />
    <img
      alt="Kylie with a helemt on, standing with her hands and feet touching the knife edge below her, smiling."
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/048db0f7-12a7-431e-a0ad-7a58b049915d/F4F03D7A-083E-4D77-A0E3-0654140B4B70.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210820T234228Z&X-Amz-Expires=86400&X-Amz-Signature=642a3bfcbad734f01a4736e6e93266668bb39c5c88ee13ddefd7660bff0f6ff1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22F4F03D7A-083E-4D77-A0E3-0654140B4B70.jpeg%22"
    />
    <img
      alt="Kylie, standing on a small rocky spot, facing towards a larger peak with clouds beginning to encompass the summit."
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/019154d9-c564-459f-89c7-ce675228105a/DD99DA25-601C-4D57-9D61-2F6C4D001317.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210820T234220Z&X-Amz-Expires=86400&X-Amz-Signature=3c726858c7c69c42a1e866921d796223df04ac05f1fd592911aeeded81f4f864&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22DD99DA25-601C-4D57-9D61-2F6C4D001317.jpeg%22"
    />
  </Gallery>
</div>

<style lang="scss">
  .gallery-wrapper {
    padding: 1.4rem 0 5rem 0;
  }
</style> -->

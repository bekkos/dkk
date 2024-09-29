<script defer>
  export let page;
</script>

{#if page >= 0 && page < 15}
  <video class="video" id="v0" src="./videos/u2air4.mp4" playsinline muted autoplay>
    <track kind="captions" />
  </video>
  {:else if page >= 15 && page < 55}
  <video class="video !w-[50%]" id="v3" src="./videos/r7_2.mp4" playsinline muted autoplay>
    <track kind="captions" />
  </video>
  {:else if page >= 55}
  <video class="video" id="v8" src="./videos/u2air3.mp4" playsinline muted autoplay>
    <track kind="captions" />
  </video>
  {:else}
  <div class="video">
  </div>
{/if}


<style>
  * {
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-color: black;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
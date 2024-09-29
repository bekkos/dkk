<script defer>
  export let visibleAnchors;

  let url = "";
  
  // Reactive statement to update id and url when visibleAnchors changes
  $: {
    const lastIndex = visibleAnchors.length - 1;
    if (lastIndex >= 0) {
      const id = visibleAnchors[lastIndex];
      
      // Update the url based on the id
      switch(id) {
        case "v0":
          url = "./videos/u2air4.mp4";
          break;
        case "v3":
          url = "./videos/r7_2.mp4";
          break;
        case "v8":
          url = "./videos/soviet.mp4";
          break;
        case "v9":
          url = "./videos/u2air3.mp4";
          break;
        default:
          url = ""; // Set default if no match
          break;
      }
    }
  }
</script>

{#if visibleAnchors.length > 0}
  <video class="video videoPlayer" id={visibleAnchors[visibleAnchors.length - 1]} src={url} playsinline muted autoplay>
    <track kind="captions" />
  </video>
{:else}
  <div class="video"></div>
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

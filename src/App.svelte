<script lang="ts">
  import Intro from "./lib/Intro.svelte";
  import Section1 from "./lib/Section1.svelte";
  import Wrapper from "./lib/Wrapper.svelte";
  import { onMount } from 'svelte';
  import 'aos/dist/aos.css';
   // @ts-ignore
  import AOS from "aos";
  import Video2 from "./lib/Video2.svelte";
  import { playOnScroll } from "./utils/scrollUtils";

  onMount(() => {
    AOS.init()
  })
  var t = 0;

  document.body.onscroll = () => {
    t = Math.abs(document.body.getBoundingClientRect().top);
    let video = document.getElementsByTagName("video")[0]
    if(video instanceof HTMLVideoElement) {
      video.hidden = false;
      switch(video.id) {
        case "v0":
          playOnScroll(video, document, t, 0, 5);
          break;
        case "v1":
          playOnScroll(video, document, t, 5000, 5);
          break;
        default: // no video
          break; // do nothing
      }
    }
  }

</script>

<main>
  <Wrapper>
    {#if t < 5000}
        <Intro />
      {:else if t >= 5000 && t < 10000}
        <Video2 />
    {/if}
    <Section1 />
  </Wrapper>
</main>

<style>
  * {
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: black;
  }
</style>

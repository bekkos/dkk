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
  var page = 0;

  document.body.onscroll = () => {
    t = Math.abs(document.body.getBoundingClientRect().top);
    page = t / 1000;
    console.log(t, page)
    let videos = document.getElementsByTagName("video");
    let videoArray = [...videos]
    videoArray.forEach((video: HTMLVideoElement) => {
        video.hidden = false;
        switch(video.id) {
          case "v0": // Intro sequence
            playOnScroll(video, document, page, 0, 1);
            break;
          case "v1": // CarSticker
            playOnScroll(video, document, page, 2000, 3);
            break;
          default: // no video
            break; // do nothing
        }
    });
  }

</script>

<main>
  <Wrapper>
    {#if page < 3.5}
        <Intro />
      {:else if t >= 3.5 && t < 10}
        <div></div>
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

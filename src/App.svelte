<script lang="ts">
  import Background from "./lib/Background.svelte";
  import Wrapper from "./lib/Wrapper.svelte";
  import { onMount } from 'svelte';
  import 'aos/dist/aos.css';
   // @ts-ignore
  import AOS from "aos";
  import { getVideoSpeed, interpolateVideoTime, playOnScroll } from "./utils/scrollUtils";
  import { checkVisibleVideos } from "./utils/checkVisible";
  import type { IActiveVideo } from "./interfaces";
  import Foreground from "./lib/Foreground.svelte";

  onMount(() => {
    AOS.init()
  })
  
  // Scroll logic
  var t = 0;
  var page = 0;
  let activeVideos: IActiveVideo[] = []
  document.body.onscroll = () => {
    t = Math.abs(document.body.getBoundingClientRect().top);
    page = t / 1000;
    console.log(page);
    let visibleVideos = checkVisibleVideos();
    visibleVideos.forEach((video: HTMLVideoElement) => {
      video.loop = true;
      let exists = activeVideos.find((x: IActiveVideo) => x.video.id == video.id);
      let activeVideo: IActiveVideo | null = null;
      // Check if video has been added to the activeVideos
      if(!exists) {
        // If not, add it
        activeVideo = {
          scrollStart: t,
          scrollEnd: t + 5000,
          video: video
        } as IActiveVideo;
        activeVideos.push(activeVideo);
      } else {
        activeVideo = exists;
      }
      if(!activeVideo) return;
      playOnScroll(video, interpolateVideoTime(t, activeVideo!.video.duration, activeVideo!.scrollStart, activeVideo!.scrollEnd), getVideoSpeed(activeVideo!.video.id))
    })
  }
</script>

<main>
  <Wrapper>
    <Background page={page} />
    <Foreground />
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

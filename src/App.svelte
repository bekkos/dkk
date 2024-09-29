<script lang="ts">
  import Background from "./lib/Background.svelte";
  import Wrapper from "./lib/Wrapper.svelte";
  import { onMount } from 'svelte';
  import 'aos/dist/aos.css';
   // @ts-ignore
  import AOS from "aos";
  import { getVideoLoop, getVideoScrollLength, getVideoSpeed, interpolateVideoTime, playOnScroll } from "./utils/scrollUtils";
  import { checkVisibleVideos } from "./utils/checkVisible";
  import type { IActiveVideo } from "./interfaces";
  import Foreground from "./lib/Foreground.svelte";

  onMount(() => {
    AOS.init()
  })

  // IOS autplay required fix
  document.body.onload = () => {
    let videos = document.getElementsByTagName("video")
    let videoArray = [...videos]
    videoArray.forEach((video) => {
      video.pause();
    })
  }
  
  // Scroll logic
  var t = 0;
  var page = 0;
  let activeVideos: IActiveVideo[] = []
  document.body.onscroll = () => {
    // TESTING
    const t = window.scrollY || window.pageYOffset; 
    const windowHeight = window.innerHeight; 
    const documentHeight = 20000; 
    
    page = (t / (documentHeight - windowHeight)) * 100;
    console.log(page);
    let visibleVideos = checkVisibleVideos();
    visibleVideos.forEach((video: HTMLVideoElement) => {
      video.pause();
      video.loop = getVideoLoop(video.id) == 1 ? true : false;
      let exists = activeVideos.find((x: IActiveVideo) => x.video.id == video.id);
      let activeVideo: IActiveVideo | null = null;
      // Check if video has been added to the activeVideos
      if(!exists) {
        // If not, add it
        activeVideo = {
          scrollStart: t,
          scrollEnd: t + getVideoScrollLength(video.id),
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

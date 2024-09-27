

export const playOnScroll = (video: HTMLVideoElement, document: Document, t: number, startT: number, speed: number) => {
    const videoDuration = video.duration;
    const maxScroll = 1000;
    if(t >= startT) {
      const scrollRatio = Math.min((t-startT) / (maxScroll * 5), 1);
      video.currentTime = (scrollRatio * videoDuration) * speed;
    }
}
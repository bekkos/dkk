

export const playOnScroll = (video: HTMLVideoElement, document: Document, page: number, startT: number, speed: number) => {
    let t = page * 1000;
    const videoDuration = video.duration;
    const maxScroll = 1000;
    if(t >= startT) {
      const scrollRatio = Math.min((t-startT) / (maxScroll * 5), 1);
      video.currentTime = (scrollRatio * videoDuration) * speed;
    }
}
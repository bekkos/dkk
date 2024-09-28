

export const playOnScroll = (video: HTMLVideoElement, time: number, speed: number = 1) => {
    video.currentTime = time * speed;
}

export const interpolateVideoTime = (currentScroll: number, videoDuration: number, scrollStart: number, scrollEnd: number) => {
  if (currentScroll < scrollStart) currentScroll = scrollStart;
  if (currentScroll > scrollEnd) currentScroll = scrollEnd;

  const scrollRange = scrollEnd - scrollStart;
  const scrollProgress = (currentScroll - scrollStart) / scrollRange;

  const videoTime = scrollProgress * videoDuration;

  return videoTime;
}

export const getVideoSpeed = (id: string): number => {
  enum videoSpeed {
    "v0" = 1,
    "v1" = 1,
    "v2" = 4
  }

  return videoSpeed[id as keyof typeof videoSpeed]
}


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
    "v2" = 4,
    "v3" = .5,
    "v4" = 1,
    "v7" = 1
  }
  return videoSpeed[id as keyof typeof videoSpeed] ?? 1;
}

export const getVideoScrollLength = (id: string): number => {
  enum videoScrollLength {
    "v0" = 2500,
    "v3" = 3500,
    "v4" = 750,
    "v5" = 2500,
    "v6" = 2500,
    "v7" = 2000,
    "v8" = 2500
  }
  return videoScrollLength[id as keyof typeof videoScrollLength] ?? 5000;
}

export const getVideoLoop = (id: string): number => {
  enum videoLoop {
    "v0" = 0,
    "v4" = 0,
    "v5" = 0,
    "v6" = 1,
    "v7" = 0,
    "v8" = 0,
  }
  return videoLoop[id as keyof typeof videoLoop] ?? 1;
}
export function checkVisibleVideos() {
  const videos = document.querySelectorAll('video'); // Get all video elements
  const visibleVideos: HTMLVideoElement[] = [];

  videos.forEach(video => {
    const rect = video.getBoundingClientRect();
    
    
    const isVisible = (
      rect.bottom >= 0 &&
      rect.right >= 0 && 
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) 
    );

    if (isVisible) {
      visibleVideos.push(video);
    }
  });

  return visibleVideos;
}


export function checkIfAnchorIsVisible() {
  const anchors = document.getElementsByClassName("anchor");
  const visibleAnchors: any[] = [];
  [...anchors].forEach(anchor => {
    const rect = anchor.getBoundingClientRect();
    
    
    const isVisible = (
      rect.bottom >= 0 &&
      rect.right >= 0 && 
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) 
    );

    if (isVisible) {
      visibleAnchors.push(anchor);
    }
  });
  return visibleAnchors;
}
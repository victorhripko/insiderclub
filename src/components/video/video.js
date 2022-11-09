import YouTubePlayer from "youtube-player";

export const initVideo = (id, wrap, videoId) => {
  let player;

  player = YouTubePlayer(id, {
    videoId,
    playerVars: { autoplay: 1, controls: 1 },
  });

  function handleIntersection(entries) {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        player.playVideo();
      }
    });
  }
  const observer = new IntersectionObserver(handleIntersection);
  observer.observe(wrap);
};

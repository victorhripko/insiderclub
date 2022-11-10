import YouTubePlayer from "youtube-player";

export const initVideo = (id, videoId) => {
  let player;

  player = YouTubePlayer(id, {
    videoId,
    playerVars: { autoplay: 0, controls: 1 },
  });
};

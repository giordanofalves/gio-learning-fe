import React, { useRef } from "react";
import VideoJS from "./VideoJS";

export default function VideoCard({videoUrl, startTime, onPlayerPause, onPlayerPlay, onPlayerEnded}) {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    startTime: startTime,
    responsive: true,
    fluid: true,
    sources: [{
      src: videoUrl,
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.currentTime(startTime);

    // You can handle player events here, for example:
    player.on('waiting', () => {
      console.log('VideoJS: player is waiting');
    });

     player.on('play', (event) => {
      console.log('VideoJS: player is playing');
      onPlayerPlay(player);
    });

    player.on('pause', (event) => {
      console.log('VideoJS: player is paused');
      onPlayerPause(player);
    });

    player.on('ended', () => {
      console.log('VideoJS: player has ended');
      onPlayerEnded(player);
    });

    player.on('dispose', () => {
      console.log('VideoJS: player will dispose');
    });


  };

  return (
    <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
  );
}

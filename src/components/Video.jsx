import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar';
import './Video.css'
function Video({ url, chanel, likes, desc, song, share, msg }) {
  const [playing, setplaying] = useState(false);
  const videoRef = useRef(null);
  const handelVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setplaying(false);
    }
    else {
      videoRef.current.play();
      setplaying(true);
    }
  };
  return (
    <div className='video'>
      <video onClick={handelVideoPress} className='video_player' ref={videoRef} loopz src={url}></video>
      <VideoFooter chanel={chanel} desc={desc} song={song} />
      <VideoSidebar likes={likes} share={share} msg={msg} />
    </div>
  )
}

export default Video

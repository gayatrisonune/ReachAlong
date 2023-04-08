import React,{useRef, useState} from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar';
import './Video.css'
function Video({url}) {
    const [playing,setplaying]=useState(false);
    const  videoRef=useRef(null);
    const handelVideoPress=()=>{
           if(playing){
            videoRef.current.pause()
            setplaying(false);
           }
           else{
            videoRef.current.play();
            setplaying(true);
           }
    };
  return (
    <div className='video'>
      <video onClick={handelVideoPress} className='video_player' ref={videoRef} loopz src={url}></video>
      <VideoFooter chanel={sas} desc={hjkhbkbk} song={bjbkb} />
      <VideoSidebar likes={12} share={234} msg={234} />
    </div>
  )
}

export default Video

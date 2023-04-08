import React from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./VideoSidebar.css"
function VideoSidebar({ likes, share, msg }) {
  const [liked, setliked] = setliked(true);
  return (

    <div className='videoSidebar'>
      <div className="videoSidebar_button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setliked(false)} />
        ) : (<FavoriteBorderIcon
          fontSize="large"
          onClick={(e) => setliked(true)} />)
        }

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon fontSize="large" />
        <p>msg</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" />
        <p>share</p>
      </div>
    </div>
  )
}

export default VideoSidebar

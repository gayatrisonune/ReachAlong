import React from 'react'
import FavoriteIcons from "@material-ui/icons/Favorite";
import FavoriteIcons from "@material-ui/icons/Message";
import FavoriteIcons from "@material-ui/icons/Share";
import FavoriteIcons from "@material-ui/icons/FavoriteBorder";
import "./VideoSidebar.css"
function VideoSidebar({ likes, share, msg }) {
  const [liked, setliked] = setliked(true);
  return (

    <div className='videoSidebar'>
      <div className="videoSidebar_button">
        {liked ? (
          <FavoriteIcons fontSize="large" onClick={(e) => setliked(false)} />
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

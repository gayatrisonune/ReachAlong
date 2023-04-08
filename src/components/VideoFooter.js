import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import Ticker from "react-ticker"
export default function Videofooter({ chanel, desc, song }) {
    return (
        <div className='videoFooter'>
            <div className="videoFooter_text">
                <h3>{chanel}</h3>
                <p>{desc}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className='videoFooter_icon' />

                    {/* <Ticker mode='smooth'>
                {({index})=>(
                    <>
                    <p>{song}</p>
                    </>
                )};
            </Ticker> */}
                </div>
            </div>
            <img className='videoFooter_record' src="http://static/thenounproject.com/png/934821-200.png" alt="" />
        </div>

    )
}

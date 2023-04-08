import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import Ticker from "react-ticker"
export default function Videofooter() {
    return (
        <div className='videoFooter'>
            <div className="videoFooter_text">
                <h3>sasss</h3>
                <p>my description</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className='videoFooter_icon' />

                    {/* <Ticker mode='smooth'>
                        {({ index }) => (
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

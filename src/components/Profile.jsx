import React from 'react'
import { Navigate } from 'react-router'
import EditProfile from './EditProfile'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import "./Profile.css";

export default function Profile() {
    const Navigate = useNavigate();
    const ClickMe = (event) => {
        Navigate('/editprofile')
        console.log('clicked')
    }

    return (
        <div>
            <>
                <Navbar />
                <button
                    onClick={(event) =>
                        ClickMe(event)}>Edit Profile
                </button>
                <div className="profile">
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img
                                    className="profileCoverImg"
                                    src="assets/post/3.jpeg"
                                    alt=""
                                />
                                <img
                                    className="profileUserImg"
                                    src="assets/person/7.jpeg"
                                    alt=""
                                />
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                                <span className="profileInfoDesc">Hello my friends!</span>
                            </div>
                        </div>
                        {/* <div className="profileRightBottom">
            <Rightbar profile/>
          </div> */}
                    </div>
                </div>
            </>
        </div>
    )
}
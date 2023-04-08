import React from 'react'
import { Navigate } from 'react-router'
import EditProfile from './EditProfile'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const Navigate = useNavigate();
    const ClickMe = (event) => {
        Navigate('/editprofile')
        console.log('clicked')
    }

    return (
        <div>
            <button
                onClick={(event) =>
                    ClickMe(event)}>Edit Profile
            </button>
        </div>
    )
}

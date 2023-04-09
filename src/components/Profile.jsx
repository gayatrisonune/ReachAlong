import React from 'react'
import { Navigate } from 'react-router'
import EditProfile from './EditProfile'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import "./Profile.css";

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import Person2Icon from '@mui/icons-material/Person2'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import TheatersIcon from '@mui/icons-material/Theaters';

export default function Profile() {
    const Navigate = useNavigate();
    const ClickMe = (event) => {
        Navigate('/editprofile')
        console.log('clicked')
    }

    return (
        <div className='bg'>
                <Navbar />
                <Button variant="outlined" color="primary"
                    onClick={(event) =>
                        ClickMe(event)}><EditIcon />
                </Button>

                <div className="profileCover">
                            <img className='profileCoverImg'
                            src="https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="profile" />
                        
                        <img className='profileUserImg'
                        src="https://images.unsplash.com/photo-1509839862600-309617c3201e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="profile" />
                        </div>
                        <div className="profileinfo">
                            <h1>Marla Seron</h1>
                </div>
                {/* <div className='info'>
                        <div className='objects'>
                            <p>Reels</p>
                        </div>
                        <div className='objects'>
                            <p>Subscription</p>
                        </div>
                        <div className='objects'>
                            About
                        </div> */}

                        <div className='info'>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar style={{color:'black'}}>
                                <TheatersIcon />
                            </Avatar>
                            </ListItemAvatar >
                            <ListItemText 
                            primary="Reels" secondary="123" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <SubscriptionsIcon style={{color:'black'}}/>
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Subscriber" secondary="2014" />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar >
                            <Avatar style={{color:'black'}}>
                                <Person2Icon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="About" secondary="myhappylife" />
                        </ListItem>
                        </List>
                        </div>
                    </div>
        
    )
}
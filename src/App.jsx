import React from 'react'

import Videofooter from './components/VideoFooter'
// import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditProfile from './components/EditProfile'
import Profile from './components/Profile'
// import Landpage from './components/Landpage'
// import Video from './components/Video'

function App() {
  const [count, setCount] = useState(0)
  return (

    <div>
      {/* <Home /> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/editprofile' element={<EditProfile />} />
        {/* <Route exact path='/' element={<Landpage />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        {/* <Route path='/video' element={<Video chanel={sas} desc={hjkhbkbk} song={bjbkb} url={" "} likes={12} share={234} msg={234} />} /> */}
      </Routes>

    </div>
  )
}
export default App
import React from 'react'

import Videofooter from './components/VideoFooter'
// import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditProfile from './components/EditProfile'
// import Landpage from './components/Landpage'


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

      </Routes>

    </div>
  )
}
export default App
import React from 'react'
import Videofooter from './components/Videofooter'
// import { Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



export default function App() {
  return (
    <div style={{ height: "100vh", backgroundImage: 'url("https://unbounce.com/photos/Gradient-Background.png")', backgroundRepeat: "no-repeat", width: "100vw", backgroundSize: "cover", }}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

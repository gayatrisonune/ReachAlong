import React from 'react'
import Videofooter from './components/Video'
// import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)
  return (

    <div style={{ height: "100vh", backgroundImage: 'url("https://unbounce.com/photos/Gradient-Background.png")', backgroundRepeat: "no-repeat", width: "100vw", backgroundSize: "cover", }}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App


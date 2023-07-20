import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import './App.css'
import Home from "./components/Pages/Home"
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App;
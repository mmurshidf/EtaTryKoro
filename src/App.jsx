import React from 'react'
import './App.css'
import Home from "./components/Pages/Home"
import {Routes, Route} from 'react-router-dom'
import Categories from "./components/Pages/Categories"
import AboutUs from "./components/Pages/AboutUs"
import Steps from "./components/Pages/Steps"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Routes>
        <Route path='/Categories' element={<Categories />}/>
      </Routes>
      <Routes>
        <Route path='/AboutUs' element={<AboutUs />}/>
      </Routes>
      <Routes>
        <Route path='/Steps' element={<Steps />}/>
      </Routes>
    </>
  )
}

export default App;
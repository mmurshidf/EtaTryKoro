import React from 'react'
import './App.css'
import Home from "./components/Pages/Home"
import {Routes, Route} from 'react-router-dom'
import Categories from "./components/Pages/Categories"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Routes>
        <Route path='/Categories' element={<Categories />}/>
      </Routes>
    </>
  )
}

export default App;
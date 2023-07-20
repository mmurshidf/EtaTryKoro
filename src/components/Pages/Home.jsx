import React from 'react'
import Navbar from "../Navbar/Navbar"
import './Home.css'

function Home() {
  return (
    <>
        <Navbar />
        <div className='Text'>
          <h1>Try It, Love It, Share It: Your Moments, Your Voice!</h1>
          <p>A platform to post your exciting experiences for others to try! Post or find new activities to try.</p>
          <div className='Links'>
            <ul className="btn">
              <li className='btns'>
                <a className='btn1' href='/'>Steps</a>
                <h5 className='up'><i className='arup'></i></h5>
                <h6>Go to Steps to learn more or Start Posting!</h6>
                <h5 className='down'><i className='ardown'></i></h5>
                <a className='btn2' href='/'>Post</a>
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Home

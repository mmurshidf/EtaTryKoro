import React from 'react'
import Navbar from "../Navbar/Navbar"
import './Categories.css'
import Popup from '../popup/popup'
import { useState } from 'react'

function Categories() {
  const [clickpop, closepop] = useState(false);
  return (
    <>
        <Navbar />
        <div className='Category'>
            <h2 className='h2'>Categories</h2>
            <button className='add' onClick={() => closepop(true)}>Add More</button>
            <Popup trigger={clickpop} Trigger={closepop}>
                <div className='form'>
                  <h3 className='form-name'>Categories Form</h3>
                  <script>
                    console.log('!!!', data);
                  </script>
                </div>
            </Popup>
        </div>
    </>
  )
}

export default Categories
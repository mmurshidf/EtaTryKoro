import React from 'react'
import './popup.css'

function popup(btn) {
  return (btn.trigger) ? (
    <>
      <div className="pop">
          <div className="closebtn">
              <i className="fa-solid fa-xmark" onClick={() => btn.Trigger(false)}></i>
              { btn.children }
          </div>
      </div>
    </>
  ) : ""
}

export default popup
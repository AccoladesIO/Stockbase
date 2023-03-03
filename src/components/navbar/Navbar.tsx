import React from 'react'
import {AiOutlineBars, AiOutlineBell} from 'react-icons/ai'
// import * as Pa from 'react-icons/fa'
import './Navbar.scss'


const Navbar = () => {
  return (
    <nav>
      <div className="logo-box">
        <div className='icon-wrap'>
      <AiOutlineBars className='icons big' />
        <img src='../../../src/assets/logo.svg' alt="" className='icon'/>
        <p>Stockbase</p>
        </div>
        <form action="">
          <input type="text"  placeholder='Search stock'/>
        </form>
        <div className="wrap">
        {/* user info block */}
        <div className="display-info">

        </div>
        {/* notification button */}
        <div className="notification">
          <AiOutlineBell  className='icons'/>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
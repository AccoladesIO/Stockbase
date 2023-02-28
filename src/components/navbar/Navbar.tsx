import React from 'react'
import * as Fa from 'react-icons/fa'
import './Navbar.scss'


const Navbar = () => {
  return (
    <nav>
      <div className="logo-box">
        <div className='icon-wrap'>
      <Fa.FaBars className='icons' />
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
          <Fa.FaBell  className='icons'/>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
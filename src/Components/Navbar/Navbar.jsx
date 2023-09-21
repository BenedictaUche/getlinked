import { NavLink } from 'react-router-dom';
import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className="logo flex justify-between items-center px-10 pt-14 pb-5 text-white">
        <div className="logo-img">
          <img src='./images/getlinked.svg' alt="getlinked" />
        </div>
        <div className="logo-text flex items-center gap-12">
          <ul className='flex gap-4'>
            <li><NavLink to='/timeline' activeclassname='active-link'>Timeline</NavLink></li>
            <li><NavLink to='/overview' activeclassname='active-link'>Overview</NavLink></li>
            <li><NavLink to='/faqs' activeclassname='active-link'>FAQs</NavLink></li>
            <li><NavLink to='/contact' activeclassname='active-link'>Contact</NavLink></li>
          </ul>
          <NavLink to='/register'>
            <button className='register-btn'>Register</button>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

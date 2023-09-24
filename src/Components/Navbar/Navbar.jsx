import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='relative'>
      <div className= 'navbar flex justify-between items-center px-10 absolute md:relative right-0 py-5 text-white'>
        <div className="logo">
          <img src="./images/getlinked.svg" alt="getlinked" />
        </div>
        <div className="menu" style={{display: `${menuOpen ? 'none' : 'flex'}`}}>
          <ul className={`flex gap-4 ${menuOpen ? 'menu-open' : ''}`}>
            <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
            <li><NavLink to="/timeline" activeClassName="active-link">Timeline</NavLink></li>
            <li><NavLink to="/overview" activeClassName="active-link">Overview</NavLink></li>
            <li><NavLink to="/faq" activeClassName="active-link">FAQs</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
          </ul>
          <NavLink to="/register" activeStyle={{ color: 'white' }}>
            <button className="register-btn">Register</button>
          </NavLink>
        </div>
        <div className="menu-icon cursor-pointer" onClick={toggleMenu}>
          <img src="./images/menu.svg" alt="menu icon" />
        </div>
      </div>

    </nav>
  );
}

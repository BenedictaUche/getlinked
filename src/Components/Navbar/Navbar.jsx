import { Link } from 'react-router-dom';
import React from 'react'
// import { FaMenu} from 'react-icons/fa'
import './Navbar.css'


export default function Navbar() {
  return (
    <>
        <nav>
            <div className="logo flex justify-between align-middle text-center px-10 pt-14 pb-5 text-white">
                <div className="logo-img">
                    <img src='./images/getlinked.svg' alt="getlinked" />
                </div>
                <div className="logo-text flex gap-12">
                    <ul className='flex gap-4'>
                        <li><Link>Timeline</Link></li>
                        <li><Link>Overview</Link></li>
                        <li><Link>FAQs</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <Link to='/register'><button className='register-btn '>Register</button></Link>
                </div>
            </div>
        </nav>

    </>
  )
}

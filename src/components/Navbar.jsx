import React from 'react'
import Logo from '../assets/logo_nobg.png'

const Navbar = () => {
  return (
    <div>

      {/* Upper Navbar */}
      <div>
        <div className='border border-red-500'>
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Lower Navbar */}
      <div>

      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

export const Header = props => {
  return (
    <nav className='grey darken-4'>
      <div className="nav-wrapper">
        <Link
          className='brand-logo'
          to="/"
        >
          <img src={logo} alt="" width={'50px'} style={{ marginLeft: '20px' }} />
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/about">About</a></li>
          <li><a href="/contacts">Contacts</a></li>
        </ul>
      </div>
    </nav>
  )
}
// function isActive(pathname, to) {
//   return pathname === to ? 'active-side' : ''
// }
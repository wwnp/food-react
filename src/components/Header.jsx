import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

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
          <li>
            <a
              href="https://github.com/wwnp/food-react"
              target={'_blank'}
              rel="noreferrer"
            >
              GitHub Repo
            </a>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Contacts
            </NavLink>

          </li>
        </ul>
      </div>
    </nav>
  )
}
// function isActive(pathname, to) {
//   return pathname === to ? 'active-side' : ''
// }
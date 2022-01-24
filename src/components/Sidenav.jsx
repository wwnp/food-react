import React from 'react'
import { NavLink } from 'react-router-dom'
export const Sidenav = props => {
  return (
    <ul id="slide-out" className="sidenav sidenav-close" ref={props.innerRef}>
      <li style={{ marginTop: '30px' }}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? 'side-a active-side' : 'side-a')}
        >
          Contacts
        </NavLink>
      </li>
      <span style={{ position: 'absolute', top: '0.5%', right: '2.5%',cursor:'pointer' }}>X</span>
    </ul >
  )
}
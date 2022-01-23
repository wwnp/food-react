import React from 'react'
import { NavLink } from 'react-router-dom'
export const Sidenav = props => {
  return (
      <ul id="slide-out" className="sidenav sidenav-close" ref={props.innerRef}>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul >
  )
}
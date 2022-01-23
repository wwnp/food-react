import React from 'react'
export const Header = props => {
  return (
    <nav className='light-blue'>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/about">About</a></li>
          <li><a href="/contacts">Contacts</a></li>
        </ul>
      </div>
    </nav>
  )
}
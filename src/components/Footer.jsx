import React from 'react'
export const Footer = props => {
  return (
    <footer className="page-footer grey darken-4" style={{ paddingTop: 0 }}>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right hoverable"
            href="https://github.com/wwnp"
            target={'_blank'}
            rel="noreferrer"
          >
            By Serge Gilev
          </a>
        </div>
      </div>
    </footer>
  )
}
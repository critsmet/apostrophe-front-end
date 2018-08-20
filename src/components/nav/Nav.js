import React from 'react'
import logo from '../../logo.png'

const Nav = ({ toggleBrowse }) => (
       <nav id="nav-bar" className="flex justify-between ml5 mr5 avenir bg-white">
        <div className="w-20 pt3 pb3 f6 tc">
          <span>search</span> / <span onClick={toggleBrowse}>browse</span>
        </div>
        <div className="w-25 pt2 pb1 tc f3">
          <img alt="logo" src={logo} className="w-80" />
        </div>
        <div className="w-20 pt3 pb3 tc f6">
          login / sign up
        </div>
      </nav>
  )

export default Nav

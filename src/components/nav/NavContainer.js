import React from 'react'
import { connect } from 'react-redux'

import { toggleBrowse } from '../browse/browseMod'
import { updateSearch, toggleSearch } from './navMod'

import NavSearch from './NavSearch'
import logo from '../../logo.png'

const NavContainer = ({ nav, updateSearch, toggleBrowse, toggleSearch }) => {



  return (
       <nav id="nav-bar" className="flex justify-between h2 mb3 ml5 mr5 avenir bg-white">
        <div className="w-20 pt3 pb3 f6 tc">
          { nav.showSearch ? <NavSearch toggle={toggleSearch} value={nav.search} update={updateSearch}/> : <div><span onClick={toggleSearch}>search</span> / <span onClick={toggleBrowse}>browse</span></div> }
        </div>
        <div className="w-25 pt2 pb1 tc f3">
          <img alt="logo" src={logo} className="w-80" />
        </div>
        <div className="w-20 pt3 pb3 tc f6">
          login / sign up
        </div>
      </nav>
  )
}

const mapStateToProps = ({ nav }) => {
    return {
    nav
  }
}

export default connect(mapStateToProps, { toggleBrowse, updateSearch, toggleSearch })(NavContainer)

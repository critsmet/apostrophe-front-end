//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { toggleBrowse } from '../browse/browseMod'
import { updateSearch, toggleSearch } from './navMod'
//components
import NavSearch from './NavSearch'
import logo from '../../logo.png'

const NavContainer = ({ nav, updateSearch, toggleBrowse, toggleSearch }) => {

  const searchField = <NavSearch toggle={toggleSearch} update={updateSearch}/>
  const browseButton = <span onClick={toggleBrowse}>browse / </span>

  return (
   <nav id="nav-bar" className="flex justify-center h2 mb3 ml5 mr5 avenir bg-white">
    <div className="w-40 pt3 pb3 ml3 pl1 f6 tc">
      {browseButton}{searchField}
    </div>
    <div className="w-30 pt2 pb1 tc f3">
      <img alt="logo" src={logo} className="w-80" />
    </div>
    <div className="w-40 pt3 pb3 pl6 tc f6">
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

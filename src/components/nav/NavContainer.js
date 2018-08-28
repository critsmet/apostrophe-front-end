//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { toggleBrowse, hideBrowse, resetFilter } from '../browse/browseMod'
import { showDefault } from '../pubs/pubMod'
//components
import NavSearch from './NavSearch'
import logo from '../../logo.png'


const NavContainer = ({ toggleBrowse, hideBrowse, resetFilter, showDefault }) => {

  const resetPage = () => {
    hideBrowse()
    resetFilter()
    showDefault()
  }

  return (
   <nav id="nav-bar" className="flex justify-center h2 mb3 ml5 mr5 avenir bg-white">
    <div className="w-40 pt3 pb3 ml3 pl1 f6 tc">
      <span onClick={toggleBrowse}>browse / </span>
      <NavSearch />
    </div>
    <div className="w-30 pt2 pb3 tc logo" onClick={resetPage}>
      apostrophe
    </div>
    <div className="w-40 pt3 pb3 pl6 tc f6">
      login / sign up
    </div>
  </nav>
  )
}


export default connect(null, { toggleBrowse, hideBrowse, resetFilter, showDefault })(NavContainer)

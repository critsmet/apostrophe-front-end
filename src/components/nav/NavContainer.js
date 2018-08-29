//packages
import React from 'react'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive';
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
   <nav id="nav-bar" className="flex justify-between h2 mb3 avenir bg-white">
    <MediaQuery query="(min-width: 751px)">
      <div className="pt3 pb3 f6 tl bs">
        <span onClick={toggleBrowse}>browse / </span>
        <NavSearch />
     </div>
    </MediaQuery>
    <MediaQuery query="(max-width: 750px)">
      <div className="pt3 pb3 f6 tl bs">
        <NavSearch /><br/>
        <span onClick={toggleBrowse}>browse</span>
      </div>
    </MediaQuery>
    <div className="pt2 pb3 tc logo" onClick={resetPage}>
    <MediaQuery query="(min-width: 751px)">
      <span className="words">apostrophe</span>
    </MediaQuery>
    <MediaQuery query="(max-width: 750px)">
      <span className="symbol">’</span>
    </MediaQuery>
    </div>
    <div className="pt3 tr f6 ls">
      login
        <MediaQuery query="(min-width: 751px)">
        <span> / </span>
        </MediaQuery>
        <MediaQuery query="(max-width: 750px)">
          <br/>
        </MediaQuery>
      sign up
    </div>
  </nav>
  )
}


export default connect(null, { toggleBrowse, hideBrowse, resetFilter, showDefault })(NavContainer)

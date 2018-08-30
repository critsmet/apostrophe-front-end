//packages
import React from 'react'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive';
//actions
import { toggleBrowse, hideBrowse, resetFilter } from '../browse/browseMod'
import { showDefault, setPublications } from '../pubs/pubMod'
//components
import NavSearch from './NavSearch'


const NavContainer = ({ toggleBrowse, hideBrowse, resetFilter, showDefault, setPublications }) => {

  const resetPage = () => {
    hideBrowse()
    resetFilter()
    showDefault()
    setPublications(["default", ''])
  }

  return (
   <nav id="navbar" className="flex justify-between h2 mb3 bg-white">
    <MediaQuery query="(min-width: 769px)">
      <div className="pt3 pb3 f5 tl bs">
        <span onClick={toggleBrowse}>browse / </span>
        <NavSearch />
     </div>
    </MediaQuery>
    <MediaQuery query="(max-width: 768px)">
      <div className="pt3 pb3 f5 tl bs">
        <NavSearch /><br/>
        <span onClick={toggleBrowse}>browse</span>
      </div>
    </MediaQuery>
    <div className="pt2 pb3 tc logo" onClick={resetPage}>
    <MediaQuery query="(min-width: 769px)">
      <span className="words">apostrophe</span>
    </MediaQuery>
    <MediaQuery query="(max-width: 768px)">
      <span className="symbol">’</span>
    </MediaQuery>
    </div>
    <div className="pt3 tr f5 ls">
      login
        <MediaQuery query="(min-width: 769px)">
        <span> / </span>
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <br/>
        </MediaQuery>
      sign up
    </div>
  </nav>
  )
}


export default connect(null, { toggleBrowse, hideBrowse, resetFilter, showDefault, setPublications })(NavContainer)

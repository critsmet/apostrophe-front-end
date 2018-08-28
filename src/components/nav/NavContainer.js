//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { toggleBrowse } from '../browse/browseMod'
import { setPublications, hideDefault, showDefault } from '../pubs/pubMod'
import { updateSearch } from './navMod'
//components
import NavSearch from './NavSearch'
import logo from '../../logo.png'


const NavContainer = ({ nav, browseFilter, updateSearch, toggleBrowse, setPublications, hideDefault, showDefault }) => {

  const browseButton = <span onClick={toggleBrowse}>browse / </span>
  const searchField = <NavSearch hideDefault={hideDefault} searchTerm={nav.search} browseFilter={browseFilter} updateSearch={updateSearch} setPubs={setPublications}/>

  return (
   <nav id="nav-bar" className="flex justify-center h2 mb3 ml5 mr5 avenir bg-white">
    <div className="w-40 pt3 pb3 ml3 pl1 f6 tc">
      {browseButton}{searchField}
    </div>
    <div className="w-30 pt2 pb3 tc logo" onClick={showDefault}>
      apostrophe
    </div>
    <div className="w-40 pt3 pb3 pl6 tc f6">
      login / sign up
    </div>
  </nav>
  )
}

const mapStateToProps = ({ nav, browse }) => {
    return {
    nav,
    browseFilter: browse.filter
  }
}

export default connect(mapStateToProps, { toggleBrowse, updateSearch, setPublications, hideDefault, showDefault })(NavContainer)

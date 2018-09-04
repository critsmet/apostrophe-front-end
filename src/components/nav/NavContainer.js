//packages
import React from 'react'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
//actions
import { toggleBrowse, hideBrowse, resetFilter } from '../browse/browseMod'
import { showDefault, setPublications } from '../pubs/pubMod'
import { changeLastBodyPush } from '../app/appMod'
//components
import NavSearch from './NavSearch'


const NavContainer = ({ showBrowse, toggleBrowse, hideBrowse, resetFilter, showDefault, setPublications, changeLastBodyPush }) => {

  const resetPage = () => {
    hideBrowse()
    resetFilter()
    showDefault()
    setPublications(["default", ''])
  }

  const handleClick = () =>{
    toggleBrowse()
    changeLastBodyPush("right")
  }

  return (
   <nav id="navbar" className="flex justify-between h2 mb3 bg-white">

    <MediaQuery query="(min-width: 769px)">
      <CSSTransition
        in={showBrowse}
        timeout={300}
        classNames="fade-out">
        <div className="pt3 pb3 f5 tl bs">
          <span id="browse-button" onClick={handleClick}>browse / </span>
          <NavSearch />
        </div>
      </CSSTransition>
    </MediaQuery>

    <MediaQuery query="(max-width: 768px)">
      <CSSTransition
        in={showBrowse}
        timeout={300}
        classNames="fade">
        <div className="pt3 pb3 f5 tl bs">
          <NavSearch /><br/>
          <span onClick={toggleBrowse}>browse</span>
        </div>
      </CSSTransition>
    </MediaQuery>

    <div className="pt1 pb3 tc logo" onClick={resetPage}>
    <MediaQuery query="(min-width: 769px)">
      <a href="/" className="words">apostrophe</a>
    </MediaQuery>
    <MediaQuery query="(max-width: 768px)">
      <a href="/" className="symbol">’</a>
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

const mapStateToProps = ({ browse }) => {
  return {
    showBrowse: browse.showBrowse
  }
}

export default connect(mapStateToProps, { toggleBrowse, hideBrowse, resetFilter, showDefault, setPublications, changeLastBodyPush })(NavContainer)

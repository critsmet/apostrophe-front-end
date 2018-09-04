//packages
import React from 'react'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
//actions
import { changeLastBodyPush } from '../app/appMod'
import { showBrowse, hideBrowse, resetFilter } from '../browse/browseMod'
import { showDefault, setPublications } from '../pubs/pubMod'
import { showUserForm, hideUserForm, setForm } from '../userForm/userFormMod'
//components
import NavSearch from './NavSearch'


const NavContainer = ({ browseShown, userFormShown, showBrowse, hideBrowse, showUserForm, hideUserForm, resetFilter, showDefault, setPublications, changeLastBodyPush }) => {

  const resetPage = () => {
    hideBrowse()
    hideUserForm()
    resetFilter()
    showDefault()
    setPublications(["default", ''])
  }

  const handleBrowseClick = () => {
    showBrowse()
    changeLastBodyPush("right")
  }

  const handleUserFormClick = (form) => {
    console.log("hi")
    showUserForm()
    setForm(form)
    changeLastBodyPush("left")
  }

  return (
   <nav id="navbar" className="flex justify-between h2 mb3 bg-white">

    <MediaQuery query="(min-width: 769px)">
      <CSSTransition
        in={browseShown}
        timeout={300}
        classNames="fade-out">
        <div className="pt3 pb3 f5 tl bs">
          <span id="browse-button" onClick={handleBrowseClick}>browse</span> /
          <NavSearch />
        </div>
      </CSSTransition>
    </MediaQuery>

    <MediaQuery query="(max-width: 768px)">
      <CSSTransition
        in={browseShown}
        timeout={300}
        classNames="fade-out">
        <div className="pt3 pb3 f5 tl bs">
          <NavSearch /><br/>
          <span id="browse-button" onClick={handleBrowseClick}>browse</span>
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

    <CSSTransition
      in={userFormShown}
      timeout={300}
      classNames="fade-out">
      <div className="pt3 tr f5 ls">
        <span className="nav-button" onClick={()=>handleUserFormClick("login")}>login</span>
        <MediaQuery query="(min-width: 769px)">
        <span> / </span>
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <br/>
        </MediaQuery>
        <span className="nav-button" onClick={()=>handleUserFormClick("signup")}>sign up</span>
      </div>
    </CSSTransition>

  </nav>
  )
}

const mapStateToProps = ({ browse, userForm }) => {
  return {
    browseShown: browse.BrowseShown,
    userFormShown: userForm.UserFormShown
  }
}

export default connect(mapStateToProps, { showBrowse, hideBrowse, showUserForm, hideUserForm, resetFilter, showDefault, setPublications, changeLastBodyPush })(NavContainer)

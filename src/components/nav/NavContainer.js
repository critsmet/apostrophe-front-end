//packages
import React from 'react'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom'
//actions
import { changeLastBodyPush, logoutUser } from '../app/appMod'
import { showBrowse, hideBrowse, resetFilter } from '../browse/browseMod'
import { showDefault, setPublications } from '../pubs/pubMod'
import { showUserForm, hideUserForm, setForm } from '../userForm/userFormMod'
//components
import NavSearch from './NavSearch'


const NavContainer = ({
  user,
  browseShown,
  userFormShown,
  changeLastBodyPush,
  logoutUser,
  showBrowse,
  hideBrowse,
  resetFilter,
  showDefault,
  setPublications,
  showUserForm,
  hideUserForm,
  setForm }) => {

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
    showUserForm()
    setForm(form)
    changeLastBodyPush("left")
  }

  const noLoggedInUser = () => {
    return (
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
    )
  }

  const loggedInUser = () => {
    console.log(user)
    return (
      <CSSTransition
        in={userFormShown}
        timeout={300}
        classNames="fade-out">
        <div className="pt3 tr f5 ls">
          <Link to={"/users/" + user.attributes.username} className="nav-button">{user.attributes.username}</Link>
          <MediaQuery query="(min-width: 769px)">
          <span> / </span>
          </MediaQuery>
          <MediaQuery query="(max-width: 768px)">
            <br/>
          </MediaQuery>
          <span className="nav-button" onClick={logoutUser}>logout</span>
        </div>
      </CSSTransition>
    )
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

    <div className="pt1 pb3 tc logo words" onClick={resetPage}>
    <MediaQuery query="(min-width: 769px)">
      <Link to='/'>apostrophe</Link>
    </MediaQuery>
    <MediaQuery query="(max-width: 768px)">
      <a href="/" className="symbol">’</a>
    </MediaQuery>
    </div>

    {user === null ? noLoggedInUser() : loggedInUser()}

  </nav>
  )
}

const mapStateToProps = ({ app, browse, userForm }) => {
  return {
    user: app.user,
    browseShown: browse.browseShown,
    userFormShown: userForm.userFormShown
  }
}

export default connect(mapStateToProps,
  { changeLastBodyPush,
    logoutUser,
    showBrowse,
    hideBrowse,
    resetFilter,
    showDefault,
    hideUserForm,
    setPublications,
    setForm,
    showUserForm,
  })(NavContainer)

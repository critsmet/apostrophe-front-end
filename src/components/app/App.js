//packages
import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom'
//components
import NavContainer from '../nav/NavContainer'
import BrowseContainer from '../browse/BrowseContainer'
import PubContainer from '../pubs/PubContainer'
import PubDisplay from '../pubs/PubDisplay'
import UserForm from '../userForm/UserForm'
import './App.css'

class App extends React.Component {
  render() {
    const { lastBodyPush, browseShown, userFormShown } = this.props

    const directionPush = () => {
      if ((browseShown && lastBodyPush == '') || lastBodyPush == "right"){
        return "right"
      } else {
        return "left"
      }
    }

     return (
      <div id="body">
        <div className="browse-menu">
        <CSSTransition
          in={browseShown}
          timeout={300}
          classNames="browse-menu"
          unmountOnExit
          >
        <BrowseContainer/>
        </CSSTransition>
        </div>
        <CSSTransition
          in={browseShown || userFormShown}
          timeout={300}
          classNames={"push-body-" + directionPush()}
          >
        <div id="main" className="pt1 pb4">
          <NavContainer />
          <Switch>
          <Route path='/publications/:slug' render={(props) =>
            <PubDisplay slug={props.match.params.slug} /> } />
          <Route path='/' component={PubContainer} />
          </Switch>
        </div>
        </CSSTransition>
        <div className="user-form">
        <CSSTransition
          in={userFormShown}
          timeout={300}
          classNames="user-form"
          unmountOnExit
          >
          <UserForm />
        </CSSTransition>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ app, browse, userForm }) => {
  return {
    lastBodyPush: app.lastBodyPush,
    browseShown: browse.browseShown,
    userFormShown: userForm.userFormShown
  }
}

export default connect(mapStateToProps)(App);

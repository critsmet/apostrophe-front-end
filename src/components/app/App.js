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
    const { lastBodyPush, BrowseShown, UserFormShown } = this.props

    const directionPush = () => {
      if ((BrowseShown && lastBodyPush == '') || lastBodyPush == "right"){
        return "right"
      } else {
        return "left"
      }
    }

     return (
      <div id="body">
        <div className="browseMenu">
        <CSSTransition
          in={BrowseShown}
          timeout={300}
          classNames="browse-menu"
          unmountOnExit
          >
        <BrowseContainer/>
        </CSSTransition>
        </div>
        <CSSTransition
          in={BrowseShown || UserFormShown}
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
        <div className="userForm">
        <CSSTransition
          in={UserFormShown}
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
    BrowseShown: browse.BrowseShown,
    UserFormShown: userForm.UserFormShown
  }
}

export default connect(mapStateToProps)(App);

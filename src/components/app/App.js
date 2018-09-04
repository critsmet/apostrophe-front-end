//packages
import React from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom'
//actions
import { hideBrowse } from '../browse/browseMod'
//components
import NavContainer from '../nav/NavContainer'
import BrowseContainer from '../browse/BrowseContainer'
import PubContainer from '../pubs/PubContainer'
import PubDisplay from '../pubs/PubDisplay'
import './App.css'

class App extends React.Component {
  render() {
    const { showBrowse, hideBrowse, lastBodyPush } = this.props

    function directionPush(){
      if ((showBrowse && lastBodyPush == '') || lastBodyPush == "right"){
        return "right"
      } else {
        return "left"
      }
    }

     return (
      <div id="body">
        <div className="browseMenu">
        <CSSTransition
          in={showBrowse}
          timeout={300}
          classNames="browse-menu"
          unmountOnExit
          >
        <BrowseContainer
          hideBrowse={hideBrowse}/>
        </CSSTransition>
        </div>
        <CSSTransition
          in={showBrowse}
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
      </div>
    )
  }
}

const mapStateToProps = ({ app, browse }) => {
  return {
    lastBodyPush: app.lastBodyPush,
    showBrowse: browse.showBrowse
  }
}

export default connect(mapStateToProps, { hideBrowse })(App);

import React from 'react';

import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import NavContainer from '../nav/NavContainer'
import Browse from '../browse/Browse'
import PubContainer from '../pubs/PubContainer'

import { toggleBrowse } from './appMod'
import './App.css'


class App extends React.Component {

  render() {
    const { app, toggleBrowse } = this.props
     return (
      <div>
        <NavContainer toggleBrowse={toggleBrowse}/>
        <CSSTransition in={app.showBrowse} timeout={300} classNames="slide" unmountOnExit>
        <div><Browse /></div>
        </CSSTransition>
        <PubContainer/>
      </div>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return {
    app
  }
}

export default connect(mapStateToProps, { toggleBrowse })(App);

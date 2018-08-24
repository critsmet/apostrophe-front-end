import React from 'react';

import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import NavContainer from '../nav/NavContainer'
import BrowseContainer from '../browse/BrowseContainer'
import PubContainer from '../pubs/PubContainer'

import './App.css'


class App extends React.Component {
  render() {
    const { browse } = this.props
     return (
      <div>
        <div style={{width: '100%', margin: 'auto'}}>
          <NavContainer />
          <CSSTransition in={browse.showBrowse} timeout={300} classNames="slide" unmountOnExit>
          <BrowseContainer />
          </CSSTransition>
        </div>
        <PubContainer />
      </div>
    )
  }
}

const mapStateToProps = ({ browse }) => {
  return {
    browse
  }
}

export default connect(mapStateToProps, null)(App);

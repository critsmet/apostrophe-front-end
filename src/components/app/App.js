//packages
import React from 'react';
import {connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
//components
import NavContainer from '../nav/NavContainer'
import BrowseContainer from '../browse/BrowseContainer'
import PubContainer from '../pubs/PubContainer'
import './App.css'


class App extends React.Component {
  render() {
    const { showBrowse } = this.props
     return (
      <div id="main">
          <NavContainer />
          <CSSTransition
            in={showBrowse}
            timeout={300}
            classNames="slide"
            unmountOnExit
            >
          <BrowseContainer />
          </CSSTransition>
          <PubContainer />
      </div>
    )
  }
}

const mapStateToProps = ({ browse }) => {
  return {
    showBrowse: browse.showBrowse
  }
}

export default connect(mapStateToProps, null)(App);

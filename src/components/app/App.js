import React from 'react';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
import NavContainer from '../nav/NavContainer'
import BrowseContainer from '../browse/BrowseContainer'
import PubContainer from '../pubs/PubContainer'
import { toggleBrowse } from './appMod'

const App = ({app, toggleBrowse}) => (
  <div>
    <NavContainer toggleBrowse={toggleBrowse}/>
    {app.showBrowse ? <BrowseContainer /> : null}
    <PubContainer/>
  </div>
)

const mapStateToProps = ({ app }) => {
  return {
    app
  }
}

export default connect(mapStateToProps, { toggleBrowse })(App);

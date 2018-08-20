import React from 'react';
import {connect} from 'react-redux';
import { Route, Link } from 'react-router-dom';
import NavContainer from '../nav/NavContainer'
import BrowseContainer from '../browse/BrowseContainer'
import PubContainer from '../pubs/PubContainer'
import { fetchPublications } from '../app/appMod'

const App = (props) => (
  <div>
    <NavContainer />
    {props.app.showBrowse? <BrowseContainer /> : null}
    <PubContainer pubs={props.app.pubs.data} fetch={props.fetchPublications}/>
    {console.log(props)}
  </div>
)

const mapStateToProps = ({ app }) => {
  return {
    app
  }
}

export default connect(mapStateToProps, { fetchPublications })(App);

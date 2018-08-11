import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav'
import Browse from './Components/Browse'
import PubContainer from './Components/PublicationDisplay/PubContainer'
// import Shelf from './components/shelf'

class App extends Component {

  render() {
    return (
      <div>
      <Nav />
      <Browse />
      <PubContainer />
      </div>
    )
  }
}

export default App;

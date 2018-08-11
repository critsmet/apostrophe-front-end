import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Browse from './components/Browse'
import PubContainer from './components/PubContainer'
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

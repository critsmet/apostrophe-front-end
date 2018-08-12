import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav'
import Browse from './Components/Browse'
import PubContainer from './Components/PublicationDisplay/PubContainer'
import { CSSTransitionGroup } from 'react-transition-group'
// import Shelf from './components/shelf'

class App extends Component {
  constructor(){
    super()

    this.state = {
      showBrowse: false
    }
  }

  toggleBrowse = () => {
    this.setState(prevState => {
      return {showBrowse: !prevState.showBrowse}
    })
  }

  render() {
    const { showBrowse } = this.state
    return (
      <div>
      <Nav toggleBrowse={this.toggleBrowse}/>
      <CSSTransitionGroup transitionName="slide" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
      { this.state.showBrowse ? <Browse /> : null}
    </CSSTransitionGroup>
      <PubContainer />
      </div>
    )
  }
}

export default App;

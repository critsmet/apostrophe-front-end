import React from 'react'
import PubList from './PubList'

export default class PubContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      pubs: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3090/api/v1/publications')
    .then(resp => resp.json())
    .then(pubs => this.setState({ pubs }))
  }

  render(){
    return(
     <div id="wrapper" className="avenir ml5 mr5">
     <PubList pubs={this.state.pubs.data} />
     </div>
     )
  }
}

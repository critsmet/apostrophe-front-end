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
    fetch('http://localhost:3000/api/v1/publications')
    .then(resp => resp.json())
    .then(pubs => this.setState({ pubs }))
  }

  render(){
    return(
     <PubList pubs={this.state.pubs.data} />
     )
  }
}

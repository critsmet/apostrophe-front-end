import React from 'react'

export default class PubList extends React.Component {
  componentDidMount(){
    this.props.fetchPublications()
  }
  render(props){
    return(
      <div>nooo</div>
    )
  }
}

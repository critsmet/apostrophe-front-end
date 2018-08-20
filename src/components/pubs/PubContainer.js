import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import PubList from './PubList'

export default class PubContainer extends React.Component{

  componentDidMount(){
    this.props.fetch()
  }

  render(){
    return(
      <div>
      hi
      </div>
    )
  }
}

//packages
import React from 'react'
import { connect } from 'react-redux'
//components
import Pub from './Pub'
import PubDefault from './PubDefault'
import PubList from './PubList'


class PubContainer extends React.Component{

  render(){
    const { showDefault } = this.props

    return (
      showDefault ? <PubDefault /> : <PubList />
    )
  }
}

const mapStateToProps = ({ pub }) => {
  return {
    showDefault: pub.showDefault
  }
}

export default connect(mapStateToProps)(PubContainer);

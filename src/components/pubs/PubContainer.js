//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { setPublications } from './pubMod'
//components
import Pub from './Pub'
import PubDefault from './PubDefault'
import PubList from './PubList'


class PubContainer extends React.Component{

  render(){
    const { pub } = this.props

    return (
      pub.showDefault ? <PubDefault /> : <PubList pubs={pub.pubs} />
    )
  }
}

const mapStateToProps = ({ pub }) => {
  return {
    pub
  }
}

export default connect(mapStateToProps, { setPublications })(PubContainer);

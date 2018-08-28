//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
//components
import Pub from './Pub'

class PubList extends React.Component{
  render(){
    const { pubs } = this.props
    return (
      <div
        id="allpubs"
        className="flex flex-wrap justify-center ml5 mr5 ttl avenir">
          { pubs.map(pub => {
            return(
              <Pub
                key={pub.attributes.title + ' card'}
                pub={pub.attributes} />
              )
            })
          }
      </div>
    )
  }
}

const mapStateToProps = ({ pub }) => {
  return {
    pubs: pub.pubs
  }
}
export default connect(mapStateToProps)(PubList)

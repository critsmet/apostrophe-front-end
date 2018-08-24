//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { fetchPublications } from './pubMod'
//components
import Pub from './Pub'

class PubContainer extends React.Component{

  componentDidMount(){
    this.props.fetchPublications()
  }

  render(){
    const { pubs } = this.props.pub

    return (
      <div
        id="allpubs"
        className="flex flex-wrap justify-center mt1 ml5 mr5 ttl avenir">
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
    pub
  }
}

export default connect(mapStateToProps, { fetchPublications })(PubContainer);

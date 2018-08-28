//packages
import React from 'react'
//actions
//components
import Pub from './Pub'

export default class PubContainer extends React.Component{

  render(props){
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

import React from 'react'
import Pub from './Pub'

const PubList = ({ pubs }) => {
  return (
  <div id="allpubs" className="flex flex-wrap justify-center mt1 ttl avenir">
      { pubs.map(pub => <Pub pub={pub.attributes} />) }
  </div>
  )
}

PubList.defaultProps = {
  pubs: []
}

export default PubList

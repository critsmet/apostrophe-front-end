import React from 'react'
import Emoji from '../../media/Emoji'

const Pub = ({ pub }) => {
  return(
  <div id={pub.title} className="w-25 h5 f6 mt3 ilb">
        <img className="w-75 mt2 mb2 center db" src={pub['cover-image-url']} />
        <div className="w-80 mt2 mb2 pt1 pb1 bg-washed-blue center flex justify-between">
        <div className="ilb ml1 tl w-70">{pub.title}</div>
        <div className="ilb mr1 tr w-25"><a href='#'>↓</a> <a href="#">☆</a> <a href={pub.url}><Emoji symbol="🔗" label="link" /></a></div>
    </div>
  </div>
  )
 }

export default Pub

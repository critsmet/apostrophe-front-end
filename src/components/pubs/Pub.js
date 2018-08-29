import React from 'react'
import Emoji from '../../media/Emoji'

const Pub = ({ pub }) => {
    return(
      <div id={pub.title} className="avenir ttl pubcard">
          <img
            alt={pub.title}
            className="w-100 mb2 center db"
            src={pub['cover-image-url']}
            />
          <div className="mt2 pt1 bg-washed-blue center flex justify-between">
          <div className="f6 ilb ml1 tl w-70 underline">{pub.title}</div>
          <div className="ilb mr1 tr w-25">
            <a href="#">☆</a>
            <a href={pub.url}>
              <Emoji symbol="🔗"
                label="link" />
            </a>
          </div>
        </div>
        <div className="f6 pt2 pl1 bg-washed-blue center">{pub.tagline}</div>
      </div>
  )
 }

export default Pub

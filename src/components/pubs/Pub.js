import React from 'react'

const Pub = ({ pub }) => {
    return(
      <div id={pub.title} className="ttl pubcard">
          <img
            alt={pub.title}
            className="w-100 mb2 center db"
            src={pub['cover-image-url']}
            />
          <div className="mt2 pt1 bg-washed-blue center flex justify-between">
          <div className="f5 ilb ml1 tl w-80 title b">{pub.title}</div>
          <div className="ilb mt1 mr1 tr w-20">
            <a href="#">☆</a>
            <a href={pub.url}>
              ↗
            </a>
          </div>
        </div>
        <div className="f6 pt1 pl1 bg-washed-blue center tagline">{pub.tagline}</div>
      </div>
  )
 }

export default Pub

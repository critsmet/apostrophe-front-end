import React from 'react'
import square from '../../media/square.png'

const PubCard = ({pub}) => {

    let coverImg = React.createRef()
    let defaultImg = React.createRef()

    const handleLoad = () => {
      defaultImg.current.setAttribute("class", "hidden")
      coverImg.current.setAttribute("class", "w-100 mb2 center cover-image shown")
    }

    const slug = pub.title.split(" ").join("-").toLowerCase()

    return(
      <div className="ttl">
        <img
          ref={defaultImg}
          alt={"default-image"}
          className="w-100 shown mb2"
          src={square}
          />
        <img
          ref={coverImg}
          alt={pub.title}
          className="w-100 mb2 center cover-image hidden"
          src={pub['cover-image-url']}
          onLoad={handleLoad}
          />
        <div className="mt2 pt1 bg-washed-blue center flex justify-between">
        <div className="f5 ilb ml1 tl w-80 text b">{pub.title}</div>
        <div className="ilb mt1 mr1 tr w-20">
          <a href="#">☆</a>
          <a href={"/publications/" + slug}>
            ↗
          </a>
        </div>
      </div>
      <div className="f6 pt1 pl1 bg-washed-blue center text">{pub.tagline}</div>
    </div>
  )
 }

export default PubCard

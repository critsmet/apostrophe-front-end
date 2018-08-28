import React from 'react'
import Emoji from '../../media/Emoji'

export default class Pub extends React.Component {

  state = {showTagline: false}

  render(){
    const { pub } = this.props

    const toggleTagline = () => {
      console.log("wee!")
      this.setState({showTagline: !this.state.showTagline})
    }

    return(
      <div id={pub.title} className="w-25 h5 f6 mt3 ilb pubcard">
          { this.state.showTagline ? <div className="pubtagline pt3 avenir f5">{pub.tagline}</div> : null }
          <img
            alt={pub.title}
            className="w-75 mt2 mb2 center db"
            src={pub['cover-image-url']}
            onMouseEnter={toggleTagline}
            onMouseLeave={toggleTagline} />
          <div className="w-80 mt2 mb2 pt1 pb1 bg-washed-blue center flex justify-between">
          <div className="ilb ml1 tl w-70">{pub.title}</div>
          <div className="ilb mr1 tr w-25">
            <a href="#">☆</a>
            <a href={pub.url}>
              <Emoji symbol="🔗"
                label="link" />
            </a>
          </div>
        </div>
      </div>
  )
 }
}

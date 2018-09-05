//packages
import React from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-css'
import { CSSTransition } from 'react-transition-group';
//actions
import { setPublications } from './pubMod'
//components
import PubCard from './PubCard'
import PubDisplay from './PubDisplay'

class PubContainer extends React.Component{

  componentDidMount(){
    this.props.setPublications(["default", ''])
  }

  render(){

    const { showDefault, pubs } = this.props

    const pubList = pubs.map((pub, index) => {
      if (index === 5) {
        return (
          <div id="default">
            apostrophe is a catalog of digital publications.
            these are some user favorites. <u>learn more</u>
          </div>)
      } else {
      return(
        <PubCard
          key={pub.attributes.title + ' card'}
          pub={pub} />
        )
      }
    })

    const breakPoints = {
      default: 4,
      1024: 3,
      768: 2,
      480: 1
    };

    return (
      <div
        ref={this.pubDisplay}
        className="pub-display">
        <Masonry
          breakpointCols={breakPoints}
          className="grid mt4"
          columnClassName="grid-column">
          {pubList}
        </Masonry>
      </div>
    )
  }
}

const mapStateToProps = ({ pub }) => {
  return {
    pubs: pub.pubs,
    showDefault: pub.showDefault
  }
}

export default connect(mapStateToProps, { setPublications })(PubContainer);

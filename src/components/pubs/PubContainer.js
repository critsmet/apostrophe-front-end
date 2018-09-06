//packages
import React from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-css'
//actions
import { setPublications } from './pubMod'
//components
import PubCard from './PubCard'

class PubContainer extends React.Component{

  componentDidMount(){
    this.props.setPublications(["default", ''])
  }

  render(){
    const { pubs } = this.props

    const pubList = pubs.map((pub, index) => {
      if (index === 5) {
        return (
          <div key="default" id="default">
            apostrophe is a catalog of digital publications.
            these are some user favorites. <u>learn more</u>
          </div>)
      } else {
      return(
        <PubCard
          key={pub.title + ' card'}
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
  }
}

export default connect(mapStateToProps, { setPublications })(PubContainer);

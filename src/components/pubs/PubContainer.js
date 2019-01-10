//packages
import React from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom'
//actions
import { setPublications } from './pubMod'
//components
import PubCard from './PubCard'

class PubContainer extends React.Component{

  componentDidMount(){
    this.props.showDefault && this.props.setPublications(["default", ''])
  }

  render(){
    const { showDefault, pubs } = this.props

    const pubList = pubs.map((pub, index) => {
      if (showDefault && index === 5) {
        return (
          [<div key="default" id="default">
            apostrophe is a digital publication catalog.
            here are some favorites.&nbsp;
            <Link to={'/info'}>
              <u>
                more info
              </u>
            </Link>
          </div>, <PubCard key={pub.title + ' card'} pub={pub}/>])
      } else {
      return(
        <PubCard key={pub.title + ' card'} pub={pub}/>
        )
      }
    }).flat()

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
    showDefault: pub.showDefault,
    pubs: pub.pubs
  }
}

export default connect(mapStateToProps, { setPublications })(PubContainer);

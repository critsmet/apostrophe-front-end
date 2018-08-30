//packages
import React from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-css'
//actions
import { setPublications } from './pubMod'
//components
import Pub from './Pub'

class PubContainer extends React.Component{

  componentDidMount(){
    this.props.setPublications(["default", ''])
  }

  render(){
    const { showDefault, pubs } = this.props

    const DefaultSquare = () => {
      return(
        <div id="default">
          apostrophe is a directory of digital publications.
          these are some user favorites. <u>learn more</u>
        </div>
    )}

    const NormalSquare = (props) => {
      return(
      <Pub
        pub={props.pub.attributes} />
      )}

    const defaultList = pubs.map((pub, index) => {
        if (pub.id === '9'){
          return <DefaultSquare key="defaultCard"/>
        } else {
          return <NormalSquare key={pub.attributes.title + ' card'} pub={pub}/>
        }
      })

    const pubList = pubs.map(pub => {
      return(
        <Pub
          key={pub.attributes.title + ' card'}
          pub={pub.attributes} />
        )
      })

    const breakPoints = {
      default: 4,
      1024: 3,
      768: 2,
      480: 1
    };

    return (
      <Masonry
        id="pubGrid"
        breakpointCols={breakPoints}
        className="grid mt4"
        columnClassName="grid-column">
        {showDefault ? defaultList : pubList}
      </Masonry>
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

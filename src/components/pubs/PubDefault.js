//packages
import React from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-css'
//actions
import { setPublications } from './pubMod'
//components
import Pub from './Pub'


class PubDefault extends React.Component{

  componentDidMount(){
    this.props.setPublications(["default", ''])
  }

  render(){
    const DefaultSquare = () => {
      return(
        <div id="default">
          apostrophe is an index of digital publications.
          these are some user favorites. <u>learn more</u>
        </div>
    )}

    const NormalSquare = (props) => {
      return(
      <Pub
        key={props.pub.attributes.title + ' card'}
        pub={props.pub.attributes} />
      )}

    const { pubs } = this.props
    const breakPoints = {
      default: 4,
      1100: 3,
      860: 2,
      620: 1
    };

    return (
        <Masonry
          breakpointCols={breakPoints}
          className="grid mt4"
          columnClassName="grid-column">
          {pubs.map((pub, index) => pub.id === '9' ? <DefaultSquare /> : <NormalSquare pub={pub}/>)}
        </Masonry>
    )
  }
}

const mapStateToProps = ({ pub }) => {
  return {
    pubs: pub.pubs
  }
}

export default connect(mapStateToProps, { setPublications })(PubDefault)

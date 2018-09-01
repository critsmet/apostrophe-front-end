//packages
import React from 'react'
import { connect } from 'react-redux'
import Masonry from 'react-masonry-css'
import { CSSTransition } from 'react-transition-group';
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

    const DefaultSquare = (props) => {
      return(
        <div id="default">
          apostrophe is a catalog of digital publications.
          these are some user favorites. <u>learn more</u>
        </div>
    )}

    const NormalSquare = (props) => {
      return(
      <Pub
        key={props.pub.attributes.title + ' card'}
        pub={props.pub.attributes} />
      )}

    const defaultList = pubs.map((pub, index) => {
        if (pub.id === '9'){
          return <DefaultSquare key="defaultCard" checkLoaded={this.checkLoaded}/>
        } else {
          return <NormalSquare key={pub.attributes.title + ' card'} pub={pub}/>
        }
      })

    const pubList = pubs.map(pub => {
      return(
        <Pub
          title={pub.attributes.title}
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
      <div
        ref={this.pubDisplay}
        className="pub-display">
        <Masonry
          breakpointCols={breakPoints}
          className="grid mt4"
          columnClassName="grid-column">
          {showDefault ? defaultList : pubList}
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

//packages
import React from 'react'
import { connect } from 'react-redux'
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
        <div id="default" className="w-25 h6 mt4 pl4 pr4 ilb">
          apostrophe is an index for digital publications.
          these are some of our favorites.
        </div>
    )}

    const NormalSquare = (props) => {
      return(
      <Pub
        key={props.pub.attributes.title + ' card'}
        pub={props.pub.attributes} />
      )}

    const { pubs } = this.props
    return (
      <div
        id="allpubs"
        className="flex flex-wrap justify-center ml5 mr5 ttl avenir">
          {pubs.map((pub, index) => pub.id === '9' ? <DefaultSquare /> : <NormalSquare pub={pub}/>)}
      </div>
    )
  }
}

const mapStateToProps = ({ pub }) => {
  return {
    pubs: pub.pubs
  }
}

export default connect(mapStateToProps, { setPublications })(PubDefault)

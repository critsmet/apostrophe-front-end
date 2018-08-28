//packages
import React from 'react'
//actions
//components
import Pub from './Pub'

export default class PubDefault extends React.Component{

  componentDidMount(){
    this.props.setPublications(["default", ''])
  }

  render(){

    const DefaultSquare = (props) => {
      return(
        <div id="default" className="w-25 h5 mt4 pl4 pr4 ilb">
          apostrophe is a library for digital publications. These are some of our favorites.
          <div className="learn avenir f6">
            learn more
          </div>
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

//packages
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
//actions
import { setShowPubs } from './pubMod'
//components
import MiniPubCard from './MiniPubCard'

class PubDisplay extends React.Component {

  componentDidMount(){
    this.props.setShowPubs([this.props.slug, 'show'])
  }

  componentDidUpdate(prevProps){
    if (prevProps.slug !== this.props.slug){
      this.props.setShowPubs([this.props.slug, 'show'])
    }
  }

  render(){
    const { pubs } = this.props
    
    const recs = this.props.pubs.recs.concat(this.props.pubs.fillers)

    const recCards = recs.map(pub => <MiniPubCard key={pub.title} pub={pub} />)

    const PubDisplayDiv = pubs.pub.map(pub => {

      const tags = pub.tags.split(", ").map(tag => <div key={tag} className="flex mt1 mr2">{"#" + tag}</div>)

      return (
        <React.Fragment key={pub.title}>
          <div id="display-div" className="mt4 flex flex-wrap justify-between">
            <div className="flex flex-column w-30-l w-40-m w-100">
              <div className="w-100 center">
                <a href={pub.url}>
                  <img alt="cover" src={pub.cover_image_url} />
                </a>
              </div>
            </div>
            <div className="flex flex-column w-40-l w-60-m w-100 pl3-ns">
              <div className="w-100 f3 i ttl tl bg-washed-blue text">
                {pub.title}
              </div>
            <div className="w-100 ttl tl mt3 text">
              <div className="f5">
                {pub.description}
              </div>
              <div className="flex flex-wrap w-100 mt3 f6">
                {tags}
              </div>
            </div>
          </div>
          <div className="flex-m flex-column-l w-30-l w-100 pl3-l justify-center text">
            <div className="flex flex-column justify-center h4-l h3 f5 ttl tc i w-100-l w-50-m pt4">
              be the first to like
            </div>
            <div className="flex flex-column justify-center h4-l h3 mt4-l f5 ttl tc i w-100-l w-50-m">
              be the first to leave a comment
            </div>
          </div>
          <div className="flex flex-wrap f5 w-100 text pt3 justify-between">
            <div className="w-100 i">
              similar publications
            </div>
              {recCards}
            </div>
          </div>
        </React.Fragment>
      )
    })
      return (
        <React.Fragment>
          {PubDisplayDiv}
        </React.Fragment>
      )
    }
  }


const mapStateToProps = ({ pub }) => {
  return {
    pubs: pub.showPubs
  }
}

export default withRouter(connect(mapStateToProps, { setShowPubs })(PubDisplay))

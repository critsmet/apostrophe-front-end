//packages
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Masonry from 'react-masonry-css'
import { CSSTransition } from 'react-transition-group'
//actions
import { setPublications, setShowPubs, hideDefault, clearPublications } from './pubMod'
import { clearUserDisplay } from '../user/userMod'
//components
import LikesGrid from './LikesGrid'
import MiniPubCard from './MiniPubCard'
import PubStar from './PubStar'

class PubDisplay extends React.Component {

  state = { liked: null }

  componentDidMount(){
    this.props.clearUserDisplay()
    this.props.setShowPubs([this.props.slug, 'show'])
  }

  componentDidUpdate(prevProps){
    if (prevProps.slug !== this.props.slug){
      this.props.setShowPubs([this.props.slug, 'show'])
    }
  }

  updateLiked = (boolean) => {
    this.setState({ liked: boolean }, () => console.log(this.state))
  }

  render(){
    const { pubs, loggedInUser, hideDefault, setPublications, history } = this.props

    const recs = this.props.pubs.recs.concat(this.props.pubs.fillers)

    const recCards = recs.map(pub => <MiniPubCard key={pub.title} pub={pub} />)

    const pubDisplayDiv = pubs.pub.map(pub => {

      const breakPoints = {
        default: 4,
        1260: 2,
        480: 1
      };

      const tagSearch = (tag) => {
        hideDefault()
        history.push('/')
        clearPublications()
        setPublications([tag, ''])
      }

      const tags = pub.tags.split(", ").map(tag => <div key={tag} onClick={()=>tagSearch(tag)} className="flex mt1 mr2 nav-button">{"#" + tag}</div>)

      return (
        <div key={pub.title} id="display-div" className="mt4 flex flex-wrap justify-between">
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
            <div className="flex flex-wrap w-100 mt3 mb2 f6">
              {tags}
            </div>
          </div>
        </div>
        <div className="flex flex-column w-30-l w-100 pl3-l text">
          <div className="mt1 flex flex-wrap bg-washed-blue justify-between">
            <span className="text i w-80">
              likes
            </span>
            <span className="w-20 tr">
              <CSSTransition
              in={loggedInUser !== null}
              timeout={300}
              classNames="fade-in"
              unmountOnExit>
                <PubStar slug={this.props.slug} updateLiked={this.updateLiked} user={loggedInUser} pubId={pub.id} />
              </CSSTransition>
            </span>
          </div>
          <LikesGrid pubId={pub.id} liked={this.state.liked} />
        </div>
        <div className="flex flex-wrap f5 w-100 text pt2 justify-between">
          <div className="w-100 i">
            similar publications
          </div>
          <Masonry
            breakpointCols={breakPoints}
            className="grid"
            columnClassName="grid-column">
            {recCards}
          </Masonry>
          </div>
        </div>
      )
    })
      return (
        <React.Fragment>
          {pubDisplayDiv}
        </React.Fragment>
      )
    }
  }


const mapStateToProps = ({ app, pub }) => {
  return {
    loggedInUser: app.user,
    pubs: pub.showPubs
  }
}

export default withRouter(connect(mapStateToProps, { setShowPubs, setPublications, hideDefault, clearPublications, clearUserDisplay })(PubDisplay))

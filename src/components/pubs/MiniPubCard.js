//packages
import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { Link, withRouter } from 'react-router-dom'
//components
import square from '../../media/square.png'
import PubStar from './PubStar'

const MiniPubCard = ({pub, user}) => {

    let coverImg = React.createRef()
    let defaultImg = React.createRef()

    const handleLoad = () => {
      defaultImg.current.setAttribute("class", "hidden")
      coverImg.current.setAttribute("class", "w-100 mb2 center cover-image shown")
    }

    const slug = pub.title.split(" ").join("-").toLowerCase()
    return(
      <div className="w-20-l w-40-m w-100 mt3">
        <img
          ref={defaultImg}
          alt="default"
          className="w-100 shown mb2"
          src={square}
          />
        <img
          ref={coverImg}
          alt={pub.title}
          className="w-100 mb2 center cover-image hidden"
          src={pub.cover_image_url}
          onLoad={handleLoad}
          />
        <div className="mt2 pt1 bg-washed-blue center flex justify-between ttl f5 f6-ns">
        <div className="ilb ml1 tl w-80 text i">{pub.title}</div>
        <div className="ilb mt1 mr1 tr w-20">
        <CSSTransition
          in={user !== null}
          timeout={300}
          classNames="fade-in"
          unmountOnExit
          >
          <PubStar pubId={pub.id} userId={user == null ? null : user.id} />
          </CSSTransition>
          <Link to={"/publications/" + slug}>
            ↗
          </Link>
        </div>
      </div>
    </div>
  )
 }

 const mapStateToProps = ({ app }) => {
   return {
     user: app.user
   }
 }

export default withRouter(connect(mapStateToProps)(MiniPubCard))

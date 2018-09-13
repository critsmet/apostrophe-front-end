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
      <div className="w-100 flex mt2">
        <div className="flex flex-column w-50">
          <img
          ref={defaultImg}
          alt="default"
          className="dib w-100 shown mb2"
          src={square}/>
          <a href={pub.url}>
            <img
            ref={coverImg}
            alt={pub.title}
            className="w-100 dib mb2 cover-image hidden"
            src={pub.cover_image_url}
            onLoad={handleLoad}/>
          </a>
        </div>
        <div className="flex-column w-50 pl1">
          <div className="w-100 bg-washed-blue center flex justify-between ttl f5 f6-ns">
            <div className="ilb ml1 tl w-90 text i">
              {pub.title}
            </div>
            <div className="ilb mt1 mr1 tr w-10">
              <CSSTransition
              in={user !== null}
              timeout={300}
              classNames="fade-in"
              unmountOnExit>
                <PubStar pubId={pub.id} userId={user == null ? null : user.id} />
              </CSSTransition>
              <Link to={"/publications/" + slug}>
                &#8599;
              </Link>
            </div>
          </div>
          <div className="w-100 f6 ttl">
            {pub.tagline}
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

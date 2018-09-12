//packages
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Masonry from 'react-masonry-css'
//actions
import { setUserDisplay, editUserDescription, editUserPhoto, showEditUser, hideEditUser } from './userMod'
import { clearPublications } from '../pubs/pubMod'
//components
import MiniPubCard from '../pubs/MiniPubCard'
import EditDescription from './EditDescription'
import FollowersGrid from './FollowersGrid'
import FollowingGrid from './FollowingGrid'
import UserStar from './UserStar'

class UserDisplay extends React.Component {

  state = { following: null }

  componentDidMount(){
    this.props.clearPublications()
    this.props.setUserDisplay(this.props.slug)
  }

  componentDidUpdate(prevProps){
    if (prevProps.slug !== this.props.slug){
      this.props.setUserDisplay(this.props.slug)
    }
  }

  updateFollowers = (boolean) => {
    this.setState({ following: boolean })
  }

  render(){
    const {
      editUserDescription,
      editUserPhoto,
      loggedInUser,
      user,
      editForm,
      showEditUser
      } = this.props

    const userDisplayDiv = user.map(user => {

      let fileForm = React.createRef()

      const favCards = user.attributes.publications.map(pub => <MiniPubCard key={pub.title} pub={pub} />)

      const breakPoints = {
        default: 4,
        1260: 2,
        480: 1
      };

      return (
      <div key={user.attributes.username} id="display-div" className="mt4 flex flex-wrap justify-between">
        <div className="flex flex-column w-30-l w-40-m w-100">
          <div className="w-100 center">
            <img src={user.attributes['image-url']}/>
            {loggedInUser && loggedInUser.attributes.username === this.props.slug ?
              <React.Fragment>
                <input type="file" ref={fileForm} style={ {display: "none"} } onChange={(e) => editUserPhoto(e.target.files, user.id)}/>
                <div className="f6 nav-button text tr" onClick={() => fileForm.current.click()}>
                  change photo
                </div>
              </React.Fragment>: null }
          </div>
        </div>
        <div className="flex flex-column w-40-l w-60-m w-100 pl3-ns">
          <div className="w-100 f3 i ttl tl bg-washed-blue text">
            @{user.attributes.username}
          </div>
        <div className="w-100 ttl tl mt3 text">
          <div className="f5">
            {editForm
              ? <EditDescription onSubmit={editUserDescription}/>
              : user.attributes.description}
            {loggedInUser && loggedInUser.attributes.username === this.props.slug
              ? <div className="f6 mt2">
              <br/>
              { editForm
                ? null
                : <span onClick={showEditUser} className="nav-button">edit profile</span> }
            </div>
              : null }
          </div>
        </div>
      </div>
      <div className="flex-m flex-column-l w-30-l w-100 pl3-l text">
        <div className="f5 mt1 ttl tl i w-100-l w-50-m">
          <div className="w-100 bg-washed-blue">
            following
          </div>
          <FollowingGrid />
        </div>
        <div className="mt4-l f5 ttl tl w-100-l w-50-m">
          <div className="mt1 flex flex-wrap bg-washed-blue justify-between">
            <span className="text i w-80">
              followers
            </span>
            <span className="w-20 tr">
              <CSSTransition
              in={loggedInUser !== null && loggedInUser.id !== user.id}
              timeout={300}
              classNames="fade-in"
              unmountOnExit>
                <UserStar updateFollowers={this.updateFollowers} loggedInUser={loggedInUser} userToFollow={user} />
              </CSSTransition>
            </span>
          </div>
          <FollowersGrid following={this.state.following}/>
        </div>
      </div>
      <div className="flex flex-wrap f5 w-100 text pt2 justify-between">
        <div className="w-100 i">
          liked publications
        </div>
        <Masonry
        breakpointCols={breakPoints}
        className="grid"
        columnClassName="grid-column">
          {favCards}
        </Masonry>
        </div>
      </div>
      )
    })
      return (
        <React.Fragment>
          {userDisplayDiv}
        </React.Fragment>
      )
    }
  }


const mapStateToProps = ({ app, user }) => {
  return {
    loggedInUser: app.user,
    user: user.userDisplay,
    editForm : user.editFormShown
  }
}

export default withRouter(connect(mapStateToProps, { setUserDisplay, editUserDescription, editUserPhoto, showEditUser, clearPublications })(UserDisplay))

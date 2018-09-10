//packages
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Masonry from 'react-masonry-css'
//actions
import { setUserDisplay, editUserDescription } from './userMod'
import { showEditUser, hideEditUser } from '../userForm/userFormMod'
//components
import MiniPubCard from '../pubs/MiniPubCard'
import EditDescription from './EditDescription'

class UserDisplay extends React.Component {

  componentDidMount(){
    this.props.setUserDisplay(this.props.slug)
  }

  componentDidUpdate(prevProps){
    if (prevProps.slug !== this.props.slug){
      this.props.setUserDisplay(this.props.slug)
    }
  }

  render(){
    const { editUserDescription, loggedInUser, user, editForm, showEditUser, hideEditUser } = this.props

    const userDisplayDiv = user.map(user => {

      const favCards = user.attributes.publications.map(pub => <MiniPubCard key={pub.title} pub={pub} />)

      const breakPoints = {
        default: 4,
        960: 3,
        720: 2,
        480: 1
      };

      return (
      <div key={user.attributes.username} id="display-div" className="mt4 flex flex-wrap justify-between">
        <div className="flex flex-column w-30-l w-40-m w-100">
          <div className="w-100 center">
            <img src={user.attributes['image-url']}/>
          </div>
        </div>
        <div className="flex flex-column w-40-l w-60-m w-100 pl3-ns">
          <div className="w-100 f3 i ttl tl bg-washed-blue text">
            @{user.attributes.username}
          </div>
        <div className="w-100 ttl tl mt3 text">
          <div className="f5">
            {editForm ? <EditDescription onSubmit={editUserDescription}/> : user.attributes.description}
            {loggedInUser && loggedInUser.attributes.username === this.props.slug ?
            <div className="f6 mt2">
              <br/>
              { editForm ?
                null
                : <span onClick={showEditUser} className=" nav-button">edit profile</span> }
            </div> : null }
          </div>
        </div>
      </div>
      <div className="flex-m flex-column-l w-30-l w-100 pl3-l justify-center text">
        <div className="flex flex-column justify-center h4-l h3 f5 ttl tc i w-100-l w-50-m pt4">
          following
        </div>
        <div className="flex flex-column justify-center h4-l h3 mt4-l f5 ttl tc i w-100-l w-50-m">
          followers
        </div>
      </div>
      <div className="flex flex-wrap f5 w-100 text pt3 justify-between">
        <div className="w-100 i">
          faved publications
        </div>
        <Masonry
          breakpointCols={breakPoints}
          className="grid mt4"
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


const mapStateToProps = ({ app, user, userForm }) => {
  return {
    loggedInUser: app.user,
    user: user.userDisplay,
    editForm : userForm.showEditForm
  }
}

export default withRouter(connect(mapStateToProps, { setUserDisplay, editUserDescription, showEditUser, hideEditUser })(UserDisplay))

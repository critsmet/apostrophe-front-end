//packages
import React from 'react'
import { connect } from 'react-redux'

class UserStar extends React.Component{

  state = {
    following: false
  }

  componentDidMount(){
  fetch('https://apostrophe-back-end.herokuapp.com/api/v1/relationships/find',
  {method: 'POST',
  headers: {"Content-Type": "application/json", "Accept": "application/json"},
  body: JSON.stringify({loggedInUser: this.props.loggedInUser.id, userToFollow: this.props.userToFollow.id})
  })
  .then(resp => resp.json())
  .then(resp => resp === null ? null : this.setState({faved: true})
)}

  update(boolean){
    this.props.updateFollowers(boolean);
    this.setState({faved: boolean});
  }


  render(){

    const unfav = () => {
      fetch('https://apostrophe-back-end.herokuapp.com/api/v1/relationships/',
        {method: 'DELETE',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({loggedInUser: this.props.loggedInUser.id, userToUnfollow: this.props.userToFollow.id})
        })
        .then(()=>this.update(false))
    }

    const fav = () => {
      fetch('https://apostrophe-back-end.herokuapp.com/api/v1/relationships/',
        {method: 'POST',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({loggedInUser: this.props.loggedInUser.id, userToFollow: this.props.userToFollow.id})
        })
        .then(()=>this.update(true))
    }

    return (
      <span>
      {this.state.faved ? <span className="star" onClick={unfav}>★</span> : <span className="star" onClick={fav}>☆</span>}
      </span>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return {
    user: app.user
  }
}

export default connect(mapStateToProps)(UserStar)

//packages
import React from 'react'
import { connect } from 'react-redux'

class UserStar extends React.Component{

  state = {
    following: false
  }

  componentDidMount(){
  fetch('http://localhost:3000/api/v1/relationships/find',
  {method: 'POST',
  mode: 'no-cors',
  headers: {"Content-Type": "application/json", "Accept": "application/json"},
  body: JSON.stringify({loggedInUser: this.props.loggedInUser.id, userToFollow: this.props.userToFollow.id})
  })
  .then(resp => resp.json())
  .then(resp => resp === null ? null : this.setState({faved: true})
)}

  render(){
    console.log(this.props)
    const unfav = () => {
      fetch('https://apostrophe-back-end.herokuapp.com/api/v1/relationships/',
        {method: 'DELETE',
        mode: 'no-cors',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({loggedInUser: this.props.loggedInUser.id, userToUnfollow: this.props.userToFollow.id})
      })
      this.setState({faved: false})
      this.props.updateFollowers(false)
    }

    const fav = () => {
      fetch('https://apostrophe-back-end.herokuapp.com/api/v1/relationships/',
        {method: 'POST',
        mode: 'no-cors',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({loggedInUser: this.props.loggedInUser.id, userToFollow: this.props.userToFollow.id})
      })
      this.setState({faved: true})
      this.props.updateFollowers(true)
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

//packages
import React from 'react'
import { connect } from 'react-redux'

class UserStar extends React.Component{

  state = {
    following: false
  }

  componentDidMount(){
  console.log(this.props)
  fetch('http://localhost:3000/api/v1/relationships/find',
  {method: 'POST',
  headers: {"Content-Type": "application/json", "Accept": "application/json"},
  body: JSON.stringify({loggedInUser: this.props.loggedInUser.id, userToFollow: this.props.userToFollow.id})
  })
  .then(resp => resp.json())
  .then(resp => resp === null ? null : this.setState({faved: true})
)}

  render(){
    const unfav = () => {
      fetch('http://localhost:3000/api/v1/relationships/',
        {method: 'DELETE',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({loggedInUser: this.props.loggedInUser.id, userToUnfollow: this.props.userToFollow.id})
      })
      this.setState({faved: false})
    }

    const fav = () => {
      fetch('http://localhost:3000/api/v1/relationships/',
        {method: 'POST',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({loggedInUser: this.props.loggedInUser.id, userToFollow: this.props.userToFollow.id})
      })
      this.setState({faved: true})
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

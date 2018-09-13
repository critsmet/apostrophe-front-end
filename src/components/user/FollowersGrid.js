import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class FollowersGrid extends React.Component {

  state = {
    followers: []
  }

  componentDidMount(){
    fetch('https://apostrophe-back-end.herokuapp.com/api/v1/followers',
    {method: 'POST',
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({user: this.props.user[0].id})
    })
    .then(resp => resp.json())
    .then(followers => followers.length === 0 ? null : this.setState({followers: followers.data})
    )}

    componentDidUpdate(prevProps){
      if (prevProps.following !== this.props.following){
      fetch('https://apostrophe-back-end.herokuapp.com/api/v1/followers',
      {method: 'POST',
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({user: this.props.user[0].id})
      })
      .then(resp => resp.json())
      .then(followers => followers.length === 0 ? null : this.setState({followers: followers.data})
      )}
    }

  render(){
    const { followers } = this.state
    const imageSquares = followers.map(follower => {
      return <Link to={"/users/" + follower.attributes.username}>
             <img
             alt={follower.attributes.username}
             key={follower.attributes.username}
             style={ {width: '14.28%'} }
             src={follower.attributes['image-url']} />
             </Link>
         })
    return(
      <div>
        {followers.length === 0 ? <span><br/>no followers yet</span> : imageSquares}
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user: user.userDisplay
  }
}

export default connect(mapStateToProps)(FollowersGrid)

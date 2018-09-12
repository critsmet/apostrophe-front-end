import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class FollowersGrid extends React.Component {

  state = {
    followers: []
  }

  componentDidMount(){
    fetch('https://cors-anywhere.herokuapp.com/https://apostrophe-back-end.herokuapp.com/api/v1/followers',
    {method: 'POST',
    mode: 'no-cors',
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({user: this.props.user[0].id})
    })
    .then(resp => resp.json())
    .then(followers => followers === null ? null : this.setState({followers: followers.data})
    )}

    componentDidUpdate(prevProps){
      if (prevProps.following !== this.props.following){
      fetch('https://cors-anywhere.herokuapp.com/https://apostrophe-back-end.herokuapp.com/api/v1/followers',
      {method: 'POST',
      mode: 'no-cors',
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({user: this.props.user[0].id})
      })
      .then(resp => resp.json())
      .then(followers => followers === null ? null : this.setState({followers: followers.data})
      )}
    }

  render(){
    const { followers } = this.state
    const imageSquares = followers.map(follower => <Link to={"/users/" + follower.attributes.username}><img key={follower.attributes.username} style={ {width: '14.28%'} } src={follower.attributes['image-url']} /></Link>)
    return(
      <div>
        {imageSquares}
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

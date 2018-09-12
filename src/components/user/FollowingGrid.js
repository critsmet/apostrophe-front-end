import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class FollowingGrid extends React.Component {

  state = {
    following: []
  }

  componentDidMount(){
    fetch('https://apostrophe-back-end.herokuapp.com/api/v1/following',
    {method: 'POST',
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({user: this.props.user[0].id})
    })
    .then(resp => resp.json())
    .then(following => following === null ? null : this.setState({following: following.data})
    )}

  render(){
    const { following } = this.state
    const imageSquares = following.map(following => {
      return <Link to={"/users/" + following.attributes.username}>
              <img
               alt={following.attributes.username}
               key={following.attributes.username}
               style={ {width: '14.28%'} }
               src={following.attributes['image-url']} />
             </Link>
    })
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

export default connect(mapStateToProps)(FollowingGrid)

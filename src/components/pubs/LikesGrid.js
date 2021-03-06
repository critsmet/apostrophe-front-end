import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class LikesGrid extends React.Component {

  state = {
    likes: []
  }

  componentDidMount(){
    fetch('https://apostrophe-back-end.herokuapp.com/api/v1/publications/likes',
    {method: 'POST',
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({publication: this.props.pubId})
    })
    .then(resp => resp.json())
    .then(likes => likes === null ? null : this.setState({likes: likes.data})
    )}

    componentDidUpdate(prevProps){
      if (prevProps.liked !== this.props.liked){
      fetch('https://apostrophe-back-end.herokuapp.com/api/v1/publications/likes',
      {method: 'POST',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({publication: this.props.pubId})
      })
      .then(resp => resp.json())
      .then(likes => likes === null ? null : this.setState({likes: likes.data})
      )}
    }

  render(){
    const { likes } = this.state
    const imageSquares = likes.map(like => {
      return <Link
              to={"/users/" + like.attributes.username}>
                <img
                alt={like.attributes.username}
                key={like.attributes.username}
                style={ {width: '14.28%'} }
                src={like.attributes['image-url']} />
             </Link>
           })

    return(
      <div className="mb1">
        {likes.length === 0 ? <span>no likes yet</span> : imageSquares}
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user: user.userDisplay
  }
}

export default connect(mapStateToProps)(LikesGrid)

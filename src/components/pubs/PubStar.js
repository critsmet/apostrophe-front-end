//packages
import React from 'react'
import { connect } from 'react-redux'

class PubStar extends React.Component{

  state = {
    faved: false
  }

  componentDidMount(){
  fetch('https://apostrophe-back-end.herokuapp.com/api/v1/likes/find',
  {method: 'POST',
  headers: {"Content-Type": "application/json", "Accept": "application/json"},
  body: JSON.stringify({pub: this.props.pubId, user: this.props.user.id})
  })
  .then(resp => resp.json())
  .then(resp => resp === null ? null : this.setState({faved: true})
)}

  render(){

    const unfav = () => {
      fetch('https://apostrophe-back-end.herokuapp.com/api/v1/likes/',
        {method: 'DELETE',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({pub: this.props.pubId, user: this.props.user.id})
      })
      this.setState({faved: false})
      this.props.slug ? this.props.updateLiked(false) : null
    }

    const fav = () => {
      fetch('https://apostrophe-back-end.herokuapp.com/api/v1/likes/',
        {method: 'POST',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({pub: this.props.pubId, user: this.props.user.id})
      })
      this.setState({faved: true})
      this.props.slug ? this.props.updateLiked(true) : null
    }

    return (
      <span>
      {this.state.faved
        ? <span className="star" onClick={unfav}>★</span>
        : <span className="star" onClick={fav}>☆</span>}
      </span>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return {
    user: app.user
  }
}

export default connect(mapStateToProps)(PubStar)

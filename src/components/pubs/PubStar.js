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

  update(boolean){
    this.setState({faved: boolean})
    this.props.slug ? this.props.updateLiked(boolean) : null
  }

  render(){

    const unfav = () => {
      fetch('https://apostrophe-back-end.herokuapp.com/api/v1/likes/',
        {method: 'DELETE',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({pub: this.props.pubId, user: this.props.user.id})
      }).then(() => this.update(false))
      }

    const fav = () => {
      fetch('https://apostrophe-back-end.herokuapp.com/api/v1/likes/',
        {method: 'POST',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({pub: this.props.pubId, user: this.props.user.id})
        })
        .then(() => this.update(true))
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

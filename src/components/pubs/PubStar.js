//packages
import React from 'react'
import { connect } from 'react-redux'

class PubStar extends React.Component{

  state = {
    faved: false
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/likes/find',
  {method: 'POST',
  headers: {"Content-Type": "application/json", "Accept": "application/json"},
  body: JSON.stringify({pub: this.props.pubId, user: this.props.userId})
  })
  .then(resp => resp.json())
  .then(resp => resp === null ? null : this.setState({faved: true})
)}

  render(){

    const { id } = this.state

    const unfav = () => {
      fetch('http://localhost:3000/api/v1/likes/',
        {method: 'DELETE',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({pub: this.props.pubId, user: this.props.userId})
      })
      this.setState({faved: false})
    }

    const fav = () => {
      fetch('http://localhost:3000/api/v1/likes/',
        {method: 'POST',
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({pub: this.props.pubId, user: this.props.userId})
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

export default connect(mapStateToProps)(PubStar)

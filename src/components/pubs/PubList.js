import React from 'react'

export default class PubList extends React.Component {
  componentDidMount(){
    this.props.fetchPublications()
  }
  render(props){
    return(
      <div
        id="allpubs"
        className="flex flex-wrap justify-center ml5 mr5 ttl avenir">
          { pubs.map(pub => {
            return(
              <Pub
                key={pub.attributes.title + ' card'}
                pub={pub.attributes} />
              )
            })
          }
      </div>
    )
  }
}

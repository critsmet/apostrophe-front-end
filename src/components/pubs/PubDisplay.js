//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { setPublications } from './pubMod'

class PubDisplay extends React.Component {

  componentDidMount(){
    this.props.setPublications([this.props.slug.split('-').join(' '), ''])
  }

  render(){

    const { pub } = this.props

    const PubDisplayDiv = pub.map(pub => {
      return (
        <div id="display-div" className="mt4 flex flex-wrap justify-between">
         <div className="flex flex-column w-30-l w-40-m w-100">
           <div className="w-100 center">
             <img src={pub.attributes["cover-image-url"]} />
            </div>
          </div>
          <div className="flex flex-column w-40-l w-60-m w-100 pl3-ns">
           <div className="w-100 f3 i ttl tl bg-washed-blue text">
             {pub.attributes.title}
            </div>
            <div className="w-100 ttl tl mt3 text">
             <div className="f5">{pub.attributes.description}</div>
             <div className="flex flex-wrap w-100 mt3 f6">{pub.attributes.tags.split(", ").map(tag => <div className="flex mt1 mr2">{"#" + tag}</div>)}</div>
           </div>
          </div>
          <div className="flex-m flex-column-l w-30-l w-100 pl3-l justify-center text">
            <div className="flex flex-column justify-center h4-l h3 f5 ttl tc i w-100-l w-50-m pt4">be the first to like</div>
            <div className="flex flex-column justify-center h4-l h3 mt4-l f5 ttl tc i w-100-l w-50-m">be the first to leave a comment</div>
          </div>
           <div className="flex flex-wrap f5 w-100 text pt3 justify-between">
             <div className="w-100 i">
             similar publications
             </div>
             <div className="w-20-l w-40-m w-100 tc mt3">
                <img src={pub.attributes['cover-image-url']} />
                <div className="mt2 pt1 bg-washed-blue center flex justify-between ttl f5 f6-ns">
                <div className="ilb ml1 tl w-80 text b">{pub.attributes.title}</div>
                <div className="ilb mt1 mr1 tr w-20">
                  <a href="#">☆</a>
                  <a href={pub.attributes.url}>
                    ↗
                  </a>
                </div>
              </div>
             </div>
             <div className="w-20-l w-40-m w-100 tc mt3">
                <img src={pub.attributes['cover-image-url']} />
                <div className="mt2 pt1 bg-washed-blue center flex justify-between ttl f5 f6-ns">
                <div className="ilb ml1 tl w-80 text b">{pub.attributes.title}</div>
                <div className="ilb mt1 mr1 tr w-20">
                  <a href="#">☆</a>
                  <a href={pub.attributes.url}>
                    ↗
                  </a>
                </div>
              </div>
             </div>
             <div className="w-20-l w-40-m w-100 tc mt3">
                <img src={pub.attributes['cover-image-url']} />
                <div className="mt2 pt1 bg-washed-blue center flex justify-between ttl f5 f6-ns">
                <div className="ilb ml1 tl w-80 text b">{pub.attributes.title}</div>
                <div className="ilb mt1 mr1 tr w-20">
                  <a href="#">☆</a>
                  <a href={pub.attributes.url}>
                    ↗
                  </a>
                </div>
              </div>
             </div>
             <div className="w-20-l w-40-m w-100 tc mt3">
                <img src={pub.attributes['cover-image-url']} />
                <div className="mt2 pt1 bg-washed-blue center flex justify-between ttl f5 f6-ns">
                <div className="ilb ml1 tl w-80 text b">{pub.attributes.title}</div>
                <div className="ilb mt1 mr1 tr w-20">
                  <a href="#">☆</a>
                  <a href={pub.attributes.url}>
                    ↗
                  </a>
                </div>
              </div>
             </div>
            </div>
         </div>
      )
    })
      return (
        <div>
        {PubDisplayDiv}
        </div>
      )
    }
  }


const mapStateToProps = ({ pub }) => {
  return {
    pub: pub.pubs
  }
}

export default connect(mapStateToProps, { setPublications })(PubDisplay)

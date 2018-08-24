//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { updateFilter } from './browseMod'
//components
import BrowseFilter from './BrowseFilter'
import '../app/App.css'


const BrowseContainer = ({ browse, updateFilter }) => {


  return (
    <div id="browse" className="flex justify-between avenir ttl mt2 ml6 mr6">
      <div className="f6 dib pt1 tl bg-washed-green tc br3 h3 w-50">
        <div className="dib">genres: &nbsp; </div>
        {browse.filters.map((filter, index) => {
          return
            <BrowseFilter
              key={filter[0]}
              index={index}
              name={filter[0]}
              update={updateFilter} c
              hecked={filter[1]} />
            })
        }
      </div>
      <div className="f6 dib tl bg-washed-yellow br3 h3 w-50">
          <div className="dib ml3 mt2 br3 lt ">tags: add</div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ browse }) => {
  return {
    browse
  }
}

export default connect(mapStateToProps, { updateFilter })(BrowseContainer)

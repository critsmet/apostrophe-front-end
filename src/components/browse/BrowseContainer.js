import React from 'react'
import { connect } from 'react-redux'

import { updateFilter } from './browseMod'

import BrowseFilter from './BrowseFilter'
import '../app/App.css'


const BrowseContainer = ({ browse, updateFilter }) => {


  return(
  <div id="browse" className="flex justify-between avenir mt1 ttl ml6 mr6 slide">
    <div className="f6 dib pt1 tl bg-washed-green tc br3 h3 w-50">
      <div className="dib">genres: &nbsp; </div>
      {browse.filters.map((filter, index) => <BrowseFilter key={filter[0]} index={index} name={filter[0]} update={updateFilter} checked={filter[1]} />)}
      </div>
      <div className="f6 dib tl bg-washed-yellow br3 h3 w-50">
        <div className="ml3 mt2 lt dib">tags: add</div>
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

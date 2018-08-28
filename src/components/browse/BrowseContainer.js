//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { updateFilter } from './browseMod'
import { setPublications, hideDefault } from '../pubs/pubMod'
//components
import BrowseFilter from './BrowseFilter'
import '../app/App.css'


const BrowseContainer = ({ browse, updateFilter, searchTerm, setPublications, hideDefault }) => {

  const filters = [
    "all",
    "art-&-design",
    "creative-writing-&-poetry",
    "culture-&-lifestyle",
    "gender-&-sexuality",
    "science-&-technology",
    "society-&-capitalism"
    ]

  return (
    <div id="browse" className="flex justify-between avenir ttl mt2 ml6 mr6">
      <div className="f6 dib pt1 tl bg-washed-green tc br3 h2 w-100">
        {filters.map((genre, index) => {
          return (
            <BrowseFilter
              key={genre}
              index={index}
              genre={genre}
              update={updateFilter}
              searchTerm={searchTerm}
              setPubs={setPublications}
              hideDefault={hideDefault}
              checked={browse.filter} />
            )}
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({ browse, nav }) => {
  return {
    browse,
    searchTerm: nav.search
  }
}

export default connect(mapStateToProps, { updateFilter, setPublications, hideDefault })(BrowseContainer)

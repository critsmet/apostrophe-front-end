//packages
import React from 'react'
//components
import BrowseFilter from './BrowseFilter'


const BrowseContainer = ({ hideBrowse }) => {

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
    <div id="browse"
      className="f1 pl2 tl br3"
      onMouseLeave={hideBrowse}
      >
      {filters.map((genre, index) => {
        return (
          <BrowseFilter
            key={genre}
            index={index}
            genre={genre}
            />
          )}
      )}
    </div>
  )
}

export default BrowseContainer

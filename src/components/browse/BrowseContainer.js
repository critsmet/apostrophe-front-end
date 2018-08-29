//packages
import React from 'react'
//components
import BrowseFilter from './BrowseFilter'


const BrowseContainer = () => {

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
    <div id="browse" className="flex justify-center avenir ttl mt2">
      <div className="f6 dib pt1 tl bg-washed-green tc br3 w-80">
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
    </div>
  )
}

export default BrowseContainer

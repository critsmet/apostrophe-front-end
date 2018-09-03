//packages
import React from 'react'
import MediaQuery from 'react-responsive';
import { CSSTransition } from 'react-transition-group';
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
      className="pt3 f1 pl2 tl"
      onMouseLeave={hideBrowse}
      >
      filters
      <br/>
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

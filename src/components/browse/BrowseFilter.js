//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { updateFilter } from './browseMod'
import { setPublications, hideDefault } from '../pubs/pubMod'


const BrowseFilter = ({ genre, index, checked, searchTerm, updateFilter, setPublications, hideDefault }) => {
  const select = (e) => {
    let browseFilter = e.target.id
    updateFilter(browseFilter)
    setPublications([searchTerm, browseFilter])
    hideDefault()
  }

  return (
        <div className="db mr1">
          <input type="radio"
            name="genres"
            defaultChecked={genre === checked ? "checked" : ''}
            onClick={select}
            data-index={index}
            id={genre} />
          <label
            htmlFor={genre}
            className="filter"
            style={{fontSize: '20px'}}>
            {genre.split("-").join(" ")}
          </label>
        </div>
    )
  }

const mapStateToProps = ({ browse, nav }) => {
  return {
    checked: browse.filter,
    searchTerm: nav.search
  }
}

export default connect(mapStateToProps, { updateFilter, setPublications, hideDefault })(BrowseFilter)

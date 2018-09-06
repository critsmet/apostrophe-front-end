//packages
import React from 'react'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive';
//actions
import { updateFilter, hideBrowse } from './browseMod'
import { setPublications, hideDefault, clearPublications } from '../pubs/pubMod'


const BrowseFilter = ({ genre, index, checked, searchTerm, updateFilter, hideBrowse, setPublications, hideDefault, clearPublications }) => {

  const setFilterPubs = (e) => {
    let browseFilter = e.target.id
    updateFilter(browseFilter)
    clearPublications()
    setPublications([searchTerm, browseFilter])
    hideDefault()
  }

  const handleSelect = (e) => {
    e.persist()
    setTimeout(() => hideBrowse(), 150)
    setTimeout(() => setFilterPubs(e), 450)
  }

  return (
        <div className="db">
          <input type="radio"
            name="genres"
            defaultChecked={genre === checked ? "checked" : ''}
            onClick={handleSelect}
            data-index={index}
            id={genre} />
        <label
          htmlFor={genre}
          style={{fontSize: '17px'}}>
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

export default connect(mapStateToProps, { updateFilter, setPublications, hideBrowse, hideDefault, clearPublications })(BrowseFilter)

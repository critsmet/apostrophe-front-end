//packages
import React from 'react'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive';
//actions
import { updateFilter, hideBrowse } from './browseMod'
import { setPublications, hideDefault } from '../pubs/pubMod'


const BrowseFilter = ({ genre, index, checked, searchTerm, updateFilter, setPublications, hideDefault, hideBrowse }) => {

  const select = (e) => {
    console.log(e)
    let browseFilter = e.target.id
    updateFilter(browseFilter)
    setPublications([searchTerm, browseFilter])
    hideDefault()
  }

  const smallSelect = (e) => {
    e.persist()
    setTimeout(() => hideBrowse(), 150)
    setTimeout(() => select(e), 300)
  }

  return (
        <div className="db mr1">
        <MediaQuery query="(min-width: 769px)">
          <input type="radio"
            name="genres"
            defaultChecked={genre === checked ? "checked" : ''}
            onClick={select}
            data-index={index}
            id={genre} />
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <input type="radio"
            name="genres"
            defaultChecked={genre === checked ? "checked" : ''}
            onClick={smallSelect}
            data-index={index}
            id={genre} />
        </MediaQuery>
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

export default connect(mapStateToProps, { updateFilter, setPublications, hideDefault, hideBrowse })(BrowseFilter)

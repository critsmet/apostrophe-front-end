//packages
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
//actions
import { updateSearch } from './navMod'
import { setPublications, hideDefault, clearPublications } from '../pubs/pubMod'

const NavSearch = ({ searchTerm, browseFilter, updateSearch, setPublications, hideDefault, clearPublications, history}) => {

let timeout

const triggerUpdate = (e) => {
  clearTimeout(timeout)
  let search = e.target.value
  timeout = setTimeout(function() {
    handleUpdate(search)
  }, 500);
}

const handleUpdate = (searchTerm) => {
  updateSearch(searchTerm)
  directSearch(searchTerm)
  hideDefault()
}

const directSearch = (searchTerm) => {
  clearPublications()
  history.push('/')
  setPublications([searchTerm, browseFilter])
}

  return (
        <div className="dib">
          <input
          onKeyUp={triggerUpdate}
          type="text"
          placeholder="search"
          maxLength="25">
          </input>
        </div>
    )
  }


  const mapStateToProps = ({ nav, browse }) => {
      return {
      searchTerm: nav.search,
      browseFilter: browse.filter
    }
  }

  export default withRouter(connect(mapStateToProps, { updateSearch, setPublications, hideDefault, clearPublications })(NavSearch))

import React from 'react'

const NavSearch = ({ searchTerm, browseFilter, updateSearch, setPubs, hideDefault }) => {

var timeout

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
  setPubs([searchTerm, browseFilter])
}

  return (
        <div className="dib">
          <form>
            <input
              onKeyUp={triggerUpdate}
              type="text"
              placeholder="search"
              maxLength="25">
              </input>
            </form>
          </div>
    )
  }

export default NavSearch

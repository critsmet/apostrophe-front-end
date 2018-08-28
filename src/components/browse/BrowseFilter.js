import React from 'react'

const BrowseFilter = ({ genre, index, update, checked, setPubs, searchTerm, hideDefault }) => {

  const select = (e) => {
    let browseFilter = e.target.id
    update(browseFilter)
    setPubs([searchTerm, browseFilter])
    hideDefault()
  }

  return (
        <div className="dib mr1">
          <input type="radio"
            name="genres"
            defaultChecked={genre === checked ? "checked" : ''}
            onClick={select}
            data-index={index}
            id={genre} />
          <label
            htmlFor={genre}
            className="filter">
            {genre.split("-").join(" ")}
          </label>
        </div>
    )
  }

export default BrowseFilter

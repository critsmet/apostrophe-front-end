import React from 'react'

const BrowseFilter = ({ genre, index, update, checked }) => {

  return (
        <div className="dib mr1">
          <input type="radio"
            name="genres"
            defaultChecked={genre === checked ? "checked" : ''}
            onClick={update}
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

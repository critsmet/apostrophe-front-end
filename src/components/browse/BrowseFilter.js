import React from 'react'

const BrowseFilter = ({ name, index, update, checked }) => {

  return (
        <div className="dib"><input type="checkbox" defaultChecked={checked} onClick={update} data-index={index} id={name} /><label htmlFor={name} className="filter">{name.split("-").join(" ")}</label></div>
    )
  }

export default BrowseFilter

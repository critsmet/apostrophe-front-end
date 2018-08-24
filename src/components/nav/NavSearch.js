import React from 'react'

const NavSearch = ({ value, update, toggle }) => {
  console.log(value)
  return (
        <div className="ml4"><form><input onMouseLeave={toggle} autoFocus onChange={update} value={value} type="text" placeholder="search apostrophe" maxLength="30"></input></form></div>
    )
  }

export default NavSearch

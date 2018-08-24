import React from 'react'

const NavSearch = ({ value, update, toggle }) => {
  console.log(value)
  return (
        <div className="ml4">
          <form>
            <input
              autoFocus
              onMouseLeave={toggle}
              onChange={update}
              value={value}
              type="text"
              placeholder="?"
              maxLength="30">
              </input>
            </form>
          </div>
    )
  }

export default NavSearch

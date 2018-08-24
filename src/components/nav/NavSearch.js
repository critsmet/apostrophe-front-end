import React from 'react'

const NavSearch = ({ update, toggle }) => {
  return (
        <div className="dib">
          <form>
            <input
              onMouseLeave={toggle}
              onChange={update}
              type="text"
              placeholder="search"
              maxLength="25">
              </input>
            </form>
          </div>
    )
  }

export default NavSearch

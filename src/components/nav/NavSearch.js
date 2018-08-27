import React from 'react'

const NavSearch = ({ update, toggle }) => {

var timeout

const triggerUpdate = (e) => {
  clearTimeout(timeout);
  let search = e.target.value;
  timeout = setTimeout(function() {
    update(search)
  }, 500);
}

  return (
        <div className="dib">
          <form>
            <input
              onMouseLeave={toggle}
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

import React from 'react'

export default class Nav extends React.Component {

render() {

  let logo = require(`../Images/logo.png`);

  return (
    <div id="nav-wrapper" className="w-100 mt1">
      <nav id="nav-bar" className="flex justify-between ml5 mr5 avenir bg-white">
        <div className="w-20 pt3 pb3 f6 tc">
          search / browse
        </div>
        <div className="w-25 pt2 pb1 tc f3">
          <img alt="logo" src={logo} className="w-80" />
        </div>
        <div className="w-20 pt3 pb3 tc f6">
          login / sign up
        </div>
      </nav>
    </div>
  )}
}

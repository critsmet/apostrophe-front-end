//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { hideUserForm } from './userFormMod'

const UserForm = ({ hideUserForm }) => {

  return (
    <div id="user-form"
      className="f1 pl2 tr"
      onMouseLeave={hideUserForm}
      >
      <span className="ml2 words">log in</span>
      <br/>
      hiiii!!!!
    </div>
  )
}

export default connect(null, { hideUserForm })(UserForm)

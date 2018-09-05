//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { hideUserForm } from './userFormMod'
//components
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const UserForm = ({ whichForm, hideUserForm }) => {
  return (
    <div id="user-form"
      className="f1 pl2 tr"
      onMouseLeave={hideUserForm}
      >
      <span className="ml2 words">
      {whichForm == 'login' ? "login" : "sign up"}
      </span>
      <br/>
      {whichForm == 'login' ? <LoginForm /> : <SignupForm />}
    </div>
  )
}

const mapStateToProps = ({ userForm }) => {
  return {
    whichForm: userForm.form
  }
}

export default connect(mapStateToProps, { hideUserForm })(UserForm)

//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { hideUserForm } from './userFormMod'
import { setUser } from '../app/appMod'
//components
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const UserForm = ({ whichForm, hideUserForm, setUser }) => {

  const submit = (values) => {
    setUser(values)
  }

  return (
    <div id="user-form"
      className="f1 mr3"
      onMouseLeave={hideUserForm}
      >
      <span className="ml2 words">
        {whichForm == 'login' ? "login" : "sign up"}
      </span>
      <br/>
      <div className="mt3">
        {whichForm == 'login' ? <LoginForm onSubmit={setUser}/> : <SignupForm onSubmit={setUser}/>}
      </div>
    </div>
  )
}

const mapStateToProps = ({ userForm }) => {
  return {
    whichForm: userForm.form
  }
}

export default connect(mapStateToProps, { hideUserForm, setUser })(UserForm)

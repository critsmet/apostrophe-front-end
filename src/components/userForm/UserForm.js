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

  return (
    <div id="user-form"
    className="f1 mr3"
    onMouseLeave={hideUserForm}>
      {whichForm === 'login' ? <LoginForm onSubmit={setUser}/> : <SignupForm onSubmit={setUser}/>}
    </div>
  )
}

const mapStateToProps = ({ userForm }) => {
  return {
    whichForm: userForm.form
  }
}

export default connect(mapStateToProps, { hideUserForm, setUser })(UserForm)

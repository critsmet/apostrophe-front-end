import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SignupForm = ( props ) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="inputEmail" component="input" type="text" placeholder="username" />
      <Field name="inputEmail" component="input" type="text" placeholder="e-mail" />
      <Field name="inputPassword" component="input" type="password" placeholder="password" />
    </form>
  )
}

SignupForm = reduxForm({form: 'login'})(SignupForm)

export default SignupForm

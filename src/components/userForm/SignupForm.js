import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SignupForm = ( props ) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" component="input" type="text" placeholder="username" />
      <Field name="email" component="input" type="text" placeholder="e-mail" />
      <Field name="password" component="input" type="password" placeholder="password" />
      <button className="submit" type="submit">Submit</button>
    </form>
  )
}

SignupForm = reduxForm({form: 'login'})(SignupForm)

export default SignupForm

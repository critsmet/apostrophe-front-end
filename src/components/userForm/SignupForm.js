import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SignupForm = ( props ) => {
  const { handleSubmit } = props
  return (
    <React.Fragment>
      <span className="ml2 words">
        sign up
      </span>
      <br/>
      <form onSubmit={handleSubmit}>
        <Field name="username" component="input" type="text" placeholder="username" />
        <Field name="email" component="input" type="text" placeholder="e-mail" />
        <Field name="password" component="input" type="password" placeholder="password" />
        <button className="submit mt3" type="submit">submit</button>
      </form>
    </React.Fragment>
  )
}

SignupForm = reduxForm({form: 'signup'})(SignupForm)

export default SignupForm

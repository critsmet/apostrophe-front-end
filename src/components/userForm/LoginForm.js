import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = ( props ) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="inputEmail" component="input" type="text" placeholder="username" />
      <Field name="inputPassword" component="input" type="password" placeholder="password" />
    </form>
  )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

export default LoginForm

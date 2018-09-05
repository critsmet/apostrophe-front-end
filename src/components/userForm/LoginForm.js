import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = ( props ) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" component="input" type="text" placeholder="username" />
      <Field name="password" component="input" type="password" placeholder="password" />
      <button className="submit" type="submit">Submit</button>
    </form>
  )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

export default LoginForm

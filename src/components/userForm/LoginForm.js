import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = ( props ) => {
  const { handleSubmit } = props
  return (
    <React.Fragment>
      <span className="ml2 words">
        login
      </span>
      <br/>
      <form onSubmit={handleSubmit}>
        <Field name="username" component="input" type="text" placeholder="username" />
        <Field name="password" component="input" type="password" placeholder="password" />
        <button className="submit mt3" type="submit">submit</button>
      </form>
    </React.Fragment>
  )
}

LoginForm = reduxForm({form: 'login'})(LoginForm)

export default LoginForm

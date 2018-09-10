import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

let EditDescription = ( props ) => {
  const { handleSubmit, description }  = props
  return (
    <React.Fragment>
      <form id="edit-description" onSubmit={handleSubmit}>
        <Field name="description" component="input" type="text" placeholder={description} />
        <br/>
        <button className="mt3 f6" type="submit">save description</button>
      </form>
    </React.Fragment>
  )
}

EditDescription = reduxForm({form: 'description'})(EditDescription)

const mapStateToProps = ({ app }) => {
  return {
    initialValues: {
      id: app.user.id,
      description: app.user.attributes.description
    }
  }
}

export default connect(mapStateToProps)(EditDescription)

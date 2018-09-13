import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

class EditDescription extends React.Component {

  state = {description: ''}

  componentDidMount(){
    fetch('https://apostrophe-back-end.herokuapp.com/api/v1/users/' + this.props.username)
    .then(resp => resp.json())
    .then(user => this.setState({description: user.data.attributes.description}))
  }

  render(){
    const { handleSubmit }  = this.props
    return (
      <React.Fragment>
        <form id="edit-description" onSubmit={handleSubmit}>
          <Field name="description" component="input" type="text" placeholder={this.state.description} />
          <br/>
          <button className="mt3 f6" type="submit">save description</button>
        </form>
      </React.Fragment>
    )
  }
}

EditDescription = reduxForm({form: 'description'})(EditDescription)

const mapStateToProps = ({ app }) => {
  return {
    initialValues: {
      id: app.user.id,
    }
  }
}

export default connect(mapStateToProps)(EditDescription)

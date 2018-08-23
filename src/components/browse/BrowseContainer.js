import React from 'react'
import { connect } from 'react-redux'
import Browse from './Browse'
import '../app/App.css'


const BrowseContainer = (props) => (


<Browse/>
)

const mapStateToProps = ({ app }) => {
  return {
    app
  }
}

export default connect(mapStateToProps, null)(BrowseContainer)

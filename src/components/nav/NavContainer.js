import { connect } from 'react-redux'
import { toggleBrowse } from '../app/appMod'
import Nav from './Nav'

export default connect(null, { toggleBrowse })(Nav)

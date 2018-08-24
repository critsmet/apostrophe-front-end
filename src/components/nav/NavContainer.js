import { connect } from 'react-redux'
import Nav from './Nav'
import { toggleBrowse } from '../browse/browseMod'

export default connect(null, { toggleBrowse })(Nav)

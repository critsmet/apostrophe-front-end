import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import appReducer from './components/app/appMod'
import browseReducer from './components/browse/browseMod'
import navReducer from './components/nav/navMod'
import pubReducer from './components/pubs/pubMod'
import userFormReducer from './components/userForm/userFormMod'

export default combineReducers({
  app: appReducer,
  browse: browseReducer,
  pub: pubReducer,
  nav: navReducer,
  userForm: userFormReducer,
  form: formReducer
});

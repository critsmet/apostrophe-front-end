import { combineReducers } from 'redux';
import appReducer from './components/app/appMod'
import browseReducer from './components/browse/browseMod';
import navReducer from './components/nav/navMod'
import pubReducer from './components/pubs/pubMod';

export default combineReducers({
  app: appReducer,
  browse: browseReducer,
  pub: pubReducer,
  nav: navReducer
});

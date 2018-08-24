import { combineReducers } from 'redux';
import browseReducer from './components/browse/browseMod';
import pubReducer from './components/pubs/pubMod';

export default combineReducers({
  browse: browseReducer,
  pub: pubReducer
});

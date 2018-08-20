import { combineReducers } from 'redux';
import browseReducer from '../components/browse/browseMod';
import pubReducer from '../components/pubs/pubMod';
import appReducer from '../components/app/appMod';

export default combineReducers({
  app: appReducer
});

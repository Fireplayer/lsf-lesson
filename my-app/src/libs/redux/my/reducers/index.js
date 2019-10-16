import addReducer from './add';
import filterReducer from './filter';
import { combineReducers } from 'redux';
export default combineReducers({missions: addReducer, filter: filterReducer});
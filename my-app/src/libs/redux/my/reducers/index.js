import addReducer from './add';
import filterReducer from './filter';
import { combineReducers } from 'redux';

export default todoListReducer = combineReducers({addReducer, filterReducer});
import {Actions, FilterType} from '../actions';

export default function filterReducer(state= FilterType.ALL, action) {
  switch (action.type) {
    case Actions.FILTER:
      return action.kind;
    default:
      return state; 
  }
}  
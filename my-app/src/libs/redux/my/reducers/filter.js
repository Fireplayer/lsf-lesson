import {Actions, FilterType} from '../actions';

export default function filterReducer(state= FilterType.ALL, action) {
  console.log("filter reducer==========", state, action);
  switch (action.type) {
    case Actions.FILTER:
      return action.kind;
    default:
      return state; 
  }
}  
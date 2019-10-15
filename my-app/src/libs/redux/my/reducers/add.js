import {Actions} from '../actions'

function addReducer(state=[], action) {
  let {type, date, desc} = action;
  switch (action.type) {
    case Actions.ADD:
      return [...state, {
        date,
        desc,
        completed: false,
      }];
    default: 
      return state;
  }
}

export default addReducer;
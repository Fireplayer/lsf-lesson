import {Actions} from '../actions'

function addReducer(state=[{id: 0, desc: 'first', hasFinished: false}], action) {
  let {type, id, desc} = action;
  switch (type) {
    case Actions.ADD:
      return [...state, {
        id,
        desc,
        completed: false,
      }];
    case Actions.CHANGE:
      return state.map((item, index)=> {
        return id === item.id
          ? Object.assign({}, item, {hasFinished: !item.hasFinished}) 
          : item;
      });
    default: 
      return state;
  }
}

export default addReducer;
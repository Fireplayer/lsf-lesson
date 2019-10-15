import { createStore } from "redux";

function counter(state=0, action) {
  switch (action.type) {
    case 'UP':
      return state + 1;
    case 'DOWN':
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(() => console.log('reducer=======', store.getState()));
store.dispatch({type: 'UP'});
store.dispatch({type: 'UP'});
store.dispatch({type: 'UP'});
store.dispatch({type: 'UP'});
store.dispatch({type: 'UP'});
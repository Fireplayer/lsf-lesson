import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './libs/redux/todo /components/App';
import App from './libs/redux/my/components/App';
import * as serviceWorker from './serviceWorker';


import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './libs/redux/my/reducers'

const store = createStore(rootReducer);
console.log("init=====store ", store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// render(<App></App>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

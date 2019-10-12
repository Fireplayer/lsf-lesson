import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Game } from './pages/demo/demo';
import WrappedHorizontalLoginForm from './pages/demo/form1';

function App() {
  return (
    <div style={{backgroundColor:'rgba(0,0,0,1)', width: 500, height: 500}}>
      <WrappedHorizontalLoginForm style={{}}/>
    </div>
  );
}

export default App;

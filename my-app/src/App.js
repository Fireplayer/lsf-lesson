import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Game } from './pages/demo/demo';
import WrappedHorizontalLoginForm from './pages/demo/form1';
import MyList from './pages/demo/fragment';
import OuterClickExample from './pages/demo/outclick';
import Mselect from './pages/demo/click';
import SelectListBlur from './pages/demo/click_blur';
import Skin from './pages/demo/theme';

function App() {
  return (
    <div>
      <MyList ddList={[{title: "x", desc: "desc0"}, {title: "y", desc: "desc1"}]} />
      {/* <OuterClickExample/> */}
      {/* <Mselect></Mselect> */}
      {/* <SelectListBlur na="aaaa"></SelectListBlur> */}
      {/* <SelectListBlur na="bbbb"></SelectListBlur> */}
      <Skin></Skin>
    </div>
  );
}

export default App;

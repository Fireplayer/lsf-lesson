/**
 * 1。
 * 只引入antd并不能产生效果；引入了对应的css文件才发现样式发生了变化；
 * 在全局之中也引入了button的样式发现并没有发生变化，样式采用的就近的原则
 * 所以当你的按钮表现出来的样式和你想想的不一样的时候首先要确定当前使用的最近的
 * 样式是哪一个
 * 
 * 
 */
import React from "react";
import { version, Button } from "antd";
import "antd/dist/antd.css";

export default ()=> (
  <div className="App">
    <h1>Please fork this codesandbox to reproduce your issue.</h1>
    <div>Current antd version: {version}</div>
    <div style={{ marginTop: "16px" }}>
      <Button type="primary">Example button</Button>
    </div>
  </div>
);
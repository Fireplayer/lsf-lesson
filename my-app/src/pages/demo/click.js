import React from "react";
/**
 * 实现的方法和egret的实现方法如出一辙
 * 1.
 * 在egret中是每次点击的时候还要让按钮做一个向上传递消息的步骤，相当恶心；
 * 不然的话点击事件向上传递，最终会导致handleoutclick事件触发，下拉框被关闭；
 * 但在这里就做了很好的优化，判断点击事件的发起者；
 * 如果发起者是按钮的话就，handleoutclick 不做处理；
 * 2.
 * 获取对象。
 * 1>通过设置按钮id， 利用docment getElementById 获取
 * 2>react 提供了ref属性     设置按钮ref属性 this.refs[name];
 * 3>react React.createRef  设置ref 可以传递给子控件 
 *  
 * 
 * 注意：此种处理方式一直依赖于鼠标事件，假如用户没有鼠标的话 就会卡住；
 * 
 */

class Mselect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floded: true,  
    } 
    this.selfRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleOutClick = this.handleOutClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOutClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOutClick);
  }

  handleClick(e) {
    this.setState({floded: !this.state.floded});
  }

  handleOutClick(e) { 
    if (!this.state.floded) {
      const {target} = e;
      // if (target != document.getElementById('out-button')) {
      //   this.setState({floded: true});    
      //   console.log("click demo========= out click handle", e);
      // }

      // if (!this.selfRef.current.contains(target)) {
      //   this.setState({floded: true});    
      // }
        console.log("click demo========= out click handle", e, this.selfRef.current);

      if (this.selfRef.current !== target) {
        this.setState({floded: true});    
      }
    }
  }

  render() {
    console.log("click demo =============render");
    const {floded} = this.state;
    const selectElemnet = floded ? null : 
      <ul>
        <li>select 1</li>
        <li>select 2</li>
        <li>select 3</li>
      </ul>
    return (
      <div>
        <input type="text"/> 
        <button 
          id="out-button"
          ref={this.selfRef}
          style={{width:100, height:50, color:'#00ff00'}}
          onClick={this.handleClick}
        >
          >
        </button> 
        {selectElemnet}
      </div>
    ); 
  }
}
export default Mselect;
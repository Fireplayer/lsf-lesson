import React from 'react';
/**
 * 在做东西的时候不能只单单考虑鼠标点击事件
 * 还要考虑 键盘的交互
 */
class SelectListBlur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floded: true
    }
    this.timeId = null;
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("render==============click", this.props.na);
    this.setState({floded: !this.state.floded});
  }
  
  handleBlur(e) {
    console.log("render==============blur", this.props.na);
    this.timeId = setTimeout(()=> {
      this.setState({floded: true});
    });
  }

  handleFocus(e) {
    clearTimeout(this.timeId);
    console.log("render==============focus", this.props.na);
  }

  render() {
    return (
      <div 
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          aria-haspopup="true"
          aria-expanded="true"
        >
        {/* <input type="text" value={this.props.na}/> */}
        <button onClick={this.handleClick}>buxx</button>
        {(!this.state.floded) && 
          <ul>
            <li>1111</li>
            <li>1111</li>
            <li>1111</li>
          </ul>
        }
      </div>
    );
  }
}

export default SelectListBlur; 
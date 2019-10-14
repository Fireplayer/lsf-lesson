/**
 * 为一组组件定制皮肤，主题不同按钮的样式随之改变。
 */
import React, { Fragment } from 'react';

let ThemeContext = React.createContext('light');

class Skin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light: true, 
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({light: !this.state.light})
  }

  render() {
    const theme = this.state.light ? 'light' : 'black';
    return (
      <ThemeContext.Provider value='light'>
        <div>
          <SkinPro></SkinPro>
          <SkinButton handleClick={this.handleClick}></SkinButton>
        </div>
      </ThemeContext.Provider>
    );
  }
}

class SkinButton extends React.Component {
  static contextType = ThemeContext;

  render() {
    console.log("skin button========== ", ThemeContext, this.context);
    const color_light = '#999999';
    const color_black = '#000000';
    const theme = this.context;
    const isLight = theme === 'light';
    return (
      <button 
        style={{
          color: isLight ? color_black : color_light,
          backgroundColor: isLight ? color_light : color_black, 
        }}
        onClick={()=> {
          this.props.handleClick();
          this.context = 'xxxx';
        }}  
      >
        0000
      </button>
    );
  }
}

class SkinPro extends React.Component { 
  render() {
    const color_light = '#ffffff';
    const color_black = '#000000';
    const theme = this.props.theme;
    const isLight = theme === 'light';
    return (
      <p 
        style={{
          color: isLight ? color_black : color_light,
          backgroundColor: isLight ? color_light : color_black, 
        }}
      >
        pto
      </p>
    );
  }
}

export default Skin;

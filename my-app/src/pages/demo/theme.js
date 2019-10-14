/**
 * 为一组组件定制皮肤，主题不同按钮的样式随之改变。
 */

import React from 'react';
let themes = {
  dark: {font: '#777777', bg: '#ff0000'},
  light: {font: '#ff0000', bg: '#777777'},
}
let ThemeContext = React.createContext(themes.light);

class Skin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useLight: true,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({useLight: !this.state.useLight});
  }

  render() {
    const theme = this.state.useLight ? themes.light : themes.dark;
    return (
      <ThemeContext.Provider value={theme}>
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
    const theme = this.context;
    return (
      <button 
        style={{
          color: theme.font,
          backgroundColor: theme.bg, 
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
  static contextType = ThemeContext;
  render() {
    const theme = this.context;
    return (
      <p 
        style={{
          color: theme.font,
          backgroundColor: theme.bg, 
        }}
      >
        pto
      </p>
    );
  }
}

export default Skin;

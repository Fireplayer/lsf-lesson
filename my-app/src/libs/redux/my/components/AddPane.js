import React, { Component } from "react";

class AddPane extends Component {
  constructor(props) {
    super(props);
    this.state = {desc: null};
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault(); 
    console.log("add pane submit=======", this.state, this.props);
    this.props.onAdd(this.state.desc);
  }

  handleSubmit(e) {
    e.preventDefault(); 
    console.log("add pane submit=======", this.state, this.props);
  }

  handleChange(e) {
    this.setState({desc: e.target.value});
    console.log('add pane change=======', e, this.state, this.props);
  }

  render() {
    return (
      <form action="">
        add: <input type="input" name='add' value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" onSubmit={this.handleSubmit} onClick={this.handleClick} /> 
      </form>
    );
  }
}

export default AddPane;
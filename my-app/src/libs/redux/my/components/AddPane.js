import {connect} from 'react-redux'
import React, { Component } from "react";
import { to_add } from '../actions';

class AddPane extends Component {
  constructor(props) {
    super(props);
    this.state = {desc: null};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.to_add(this.state.desc);
    console.log("add pane submit=======", this.state, this.props);
  }

  handleChange(e) {
    this.setState({desc: e.target.value});
    console.log('add pane change=======', e, this.state, this.props);
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        add: <input type="input" name='add' value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" /> 
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps)=> {
  return {to_add: (desc)=> {
    dispatch(to_add(desc));
  }};
}

export default connect(null, mapDispatchToProps)(AddPane);
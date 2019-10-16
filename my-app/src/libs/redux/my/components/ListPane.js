import React, { Component } from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import { to_change } from "../actions";

class ListPane extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    console.log("===========list pane click id ", id);
    // this.props.onStatusChange(id);
    this.props.change(id);
  }

  render() {
    console.log("list pane==========", this.props);
    let {missions} = this.props;
    return (
      <div>
        <ul>
          {missions.map((item)=> {
            let {id, desc, hasFinished} = item;
            return (
              <li key={id} onClick={()=>{
                  this.props.to_change(id);
                }} >
                <label>id: {id}</label>
                <label style={{color: hasFinished ? '#00ff00' : '#ff0000'}}>desc: {desc}</label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps)=> {
  return {missions: state.missions};
}

const mapDispatchToProps = (dispatch, ownProps)=> {
  return {to_change: (id)=> {
    dispatch(to_change(id));
  }};
  // return bindActionCreators({
  //   to_change: (id)=> {
  //        dispatch(to_change(id));
  //    },
  // });
} 

export default (connect(mapStateToProps, mapDispatchToProps)(ListPane));
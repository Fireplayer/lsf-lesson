import React, { Component } from "react";
import { FilterType, to_filter } from "../actions";
import {connect} from 'react-redux'

class FilterPane extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    this.props.to_filter(type);
  }

  render() {
    console.log("filter pane=======render", this.state, this.props);
    let filters = [FilterType.ALL, FilterType.FINISHED, FilterType.WAITING];
    return (
      <div>
        filter:
          {filters.map((item)=> {
            return <button key={item} onClick={()=> {this.handleClick(item);}}>{item}</button>;
          })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps)=> {
  return {filter: state.filter};
}

const mapDispatchToProps = (dispatch, ownProps)=> {
  return {to_filter: (type)=> {
    console.log("map dispatch==== ", type);
    dispatch(to_filter(type));
  }};
}
 
export default connect(mapStateToProps, mapDispatchToProps)(FilterPane);
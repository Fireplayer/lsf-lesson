import React, { Component } from "react";
import { FilterType } from "../actions";

class FilterPane extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    this.props.onFilter(type);
  }

  render() {
    console.log("filter pane=======render", this.state, this.props);
    let {filters} = this.props;
    filters = [FilterType.ALL, FilterType.FINISHED, FilterType.WAITING];
    return (
      <div>
        filter:
          {filters.map((item)=> {
            return <button onClick={()=> {this.handleClick(item);}}>{item}</button>;
          })}
      </div>
    );
  }
}
export default FilterPane;
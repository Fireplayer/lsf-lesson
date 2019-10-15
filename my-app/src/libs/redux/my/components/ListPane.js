import React, { Component } from "react";

class ListPane extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    console.log("===========list pane click id ", id);
    this.props.onStatusChange(id);
  }

  render() {
    let {missions} = this.props;
    return (
      <div>
        <ul>
          {missions.map((item)=> {
            let {id, desc, hasFinished} = item;
            return (
              <li key={id} onClick={()=>{
                  this.handleClick(id);
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

export default ListPane;
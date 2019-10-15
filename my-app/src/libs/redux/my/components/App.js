import React, { Component } from "react";
import AddPane from "./AddPane";
import ListPane from "./ListPane";
import FilterPane from "./FilterPane";
import { FilterType } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.countId = 0;
    this.state = {
      missions: [],
      filter: FilterType.ALL,
    };
    this.handlerAddItem = this.handlerAddItem.bind(this);
    this.handlerFilterChange = this.handlerFilterChange.bind(this);
    this.handleItemStatusChange = this.handleItemStatusChange.bind(this);
  }

  handlerAddItem(desc) {
    console.log('App add item=====', desc, this.state);
    this.setState({missions: [...this.state.missions, {
      id: this.countId++,
      desc,
      hasFinished: false,
    }]});
  }

  handleItemStatusChange(id) {
    let missions = this.state.missions.map((item, index)=> {
      console.log("map=========", item.id, id, item.id === id);
      return item.id === id ? {id, desc: item.desc, hasFinished: !item.hasFinished} : item;
    });
    console.log("stataus change =========", this.state, missions);
    this.setState({missions: this.state.missions.map((item, index)=> {
      return item.id === id ? {id, desc: item.desc, hasFinished: !item.hasFinished} : item;
    })});
  }

  handlerFilterChange(val) {
    console.log('app filter change=====', val, this.state);
    this.setState({filter: val});
  }

  render() {
    let missions = this.state.missions.filter((item, index)=> {
      let filter = this.state.filter;
      if (filter === FilterType.WAITING) {
        return !item.hasFinished; 
      } else if (filter === FilterType.FINISHED) {
        return item.hasFinished; 
      } else {
        return true;
      }
    });

    return (
      <div>
        <AddPane onAdd={this.handlerAddItem} />
        <ListPane onStatusChange={this.handleItemStatusChange} missions={missions} />
        <FilterPane onFilter={this.handlerFilterChange} />
      </div> 
    );
  }
}

export default App;
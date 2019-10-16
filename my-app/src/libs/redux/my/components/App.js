/**
 * 合理的架构 actions reducers containers components 
 * index.js  
 * App.js
 * Compontents大写首字母
 * 函数的箭头表示：()=> {}; ()=> {return val;} ==== ()=> val;  
 * 点击事件的写法 不用把参数传进去了；(e)=> {handle(e)} ///  ()=> {handler(e);};
 *   
 * 
 * 
 * 通过自己写可以看出，
 * 1.不用redux也是可以做到同样的事情；所以不要为了使用redux而使用
 * 有自己判断标准；
 * 2.将react和redux联系在一起的最重要的部分 contains；
 * connect
 * 
 * 对比：
 * App.js
 * 使用react 所有的state和事件交互全在这里面处理。
 * state有改变通过setState进行解决，通过child的
 * props传递改变。 
 * 使用redux App中并没有state也没有handler。那么
 * 问题来了 redux的对state和逻辑的处理放在哪里了？
 * 
 * store
 * store 是怎么和App联系起来的呢
 * connect（f, f, f, op）(App); 
 * Provider
 * <store  store>
 * const reducer = combineReducer(...instances);
 * {missions: missionsReducer, filter: filterReducer}
 * const store = createStore(reducer);
 * <Provider store='store'> 
 *  <App/>
 * </Provider> 
 *  
 * 目前这里面有四个component
 * app--[add, list, filter];
 * add  操作missions 发动action add
 * list 操作missions中的某一个， 发动action change
 * filter 操作filter 发动action filter
 * 
 * connect
 * 
 * mapStateToProps
 * mapStateToProps(state, ownProps) : stateProps
 * 数据作为props绑定到组件上。
 * 
 * 例如list 采用redux的话，
 * 使用的数据是store中的missions 
 * const mapStateToProps = (state) => {
 *    return {
 *        missions: state.missions；
 *    }
 * }
 * 验证成功！ 不需要父容器传递props 也可以操作 数据和容器分离开了简直666；
 * 
 * 逻辑交互事件触发怎么搞？
 * mapDispatchToProps
 * mapDispatchToProps(dispatch, ownProps): dispatchProps
 * 将action作为props绑定到MyComp上。
 * 也就是说action变成属性上的值绑定在props上面 
 * 遵守react的规范，玩家的交互只有props 和 states 
 * 
 * const mapDispatchToProps = (dispatch, ownProps)=> {
 *    return {
 *       change: (...params)=> {dispatch(to_change(...params))};        
 *    };
 * }
 * 这样就可以通过props处理action 逻辑变化。 
 * 
 */

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
    // let missions = this.state.missions.filter((item, index)=> {
    //   let filter = this.state.filter;
    //   if (filter === FilterType.WAITING) {
    //     return !item.hasFinished; 
    //   } else if (filter === FilterType.FINISHED) {
    //     return item.hasFinished; 
    //   } else {
    //     return true;
    //   }
    // });

    return (
      <div>
        {/* <AddPane onAdd={this.handlerAddItem} /> */}
        {/* <ListPane onStatusChange={this.handleItemStatusChange} missions={missions} /> */}
        {/* <FilterPane onFilter={this.handlerFilterChange} /> */}
        <ListPane />
      </div> 
    );
  }
}

export default App;
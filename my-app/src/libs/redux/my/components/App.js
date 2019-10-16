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
 * 结下来是add
 * 只有一个add的action
 * connnect 首个参为null；
 * 
 * filter
 * props filter 和 to_filter action
 * 
 * 接着就是App的删除，相比起使用react的情况
 * top-level的state和很多handle全部都被分散到子控件之中
 * 而且可以清楚的得知这个控件需要什么属性做了什么事情
 * 
 * 所以在看别人代码的时候第一时间查看这些属性和方法，会很容易弄清楚这个类是做啥子的
 * 
 * 除此之外
 * propTypes
 * 使props的数据类型确定，非必须，但是这样可以让你的数据可观察。类似于typescript；
 * 观察到demo的container文件夹， container中的文件主要做了如下的操作：
 * 1.mapState  mapDisplatch  connect
 * 2.对组件进行了在再次的封装。
 */

import React from "react";
import AddPane from "./AddPane";
import ListPane from "./ListPane";
import FilterPane from "./FilterPane";

function App() {
  return (
    <div>
      <AddPane />
      <ListPane />
      <FilterPane />
    </div>
  );
}

export default App;
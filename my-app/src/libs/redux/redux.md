(为什么叫做reducer)
Reduce
=》reduce 改变。。。的状态，reduce A to B， 把状态从A变为B；
=》Array.prototype.reduce(reducer, ?initialValue).累加函数。 
  
=====what 
Redux is a predictable state container for JavaScript apps.
----redux是一个针对js应用的可预测的状态容器；
It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
----redux 可以帮助你开发行为连贯的（？？？），可以在客户端，服务端，原生环境运行，并且容易去测试的的工程。最重要的是提供良好的开发经历。例如redux-devtool 
You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available
----可以和累屎于react这样的用户界面库一起使用。整个库非常小，只有2kb，但却有一个庞大的生态系统支持。

=====install
npm insatll -- save redux
----安装是真的快，可见是真的tiny

=====Redux Starter Kit
Redux itself is small and unopinionated. We also have a separate package called redux-starter-kit, which includes some opinionated defaults that help you use Redux more effectively.
----redux 本身非常小而且灵活。我们提供了一个redux starter kit的包，已经包括了一些默认设置，旨在帮助你更有效的使用redux。
It helps simplify a lot of common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once.
----它帮助你简化了许多共有的属性和使用案例，例如：（？？？）

Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, redux-starter-kit can help you make your Redux code better.
----无论你是一个刚刚创建第一个redux工程的新手，还是一个想要是工程更简化的老手，redux-starter-kit 都可以使你的redux代码更优雅；

=====Basic Example
The whole state of your app is stored in an object tree inside a single store.
The only way to change the state tree is to emit an action, an object describing what happened.
To specify how the actions transform the state tree, you write pure reducers.
That's it!
----你的应用的所有状态信息都将会被储存在一个唯一的store（state  tree）对象之中；
(改变这个store状态对象的唯一方式是触发一个action)，
action是一个描述什么正在发生的对象。这些actions具体是怎么改变store中的state tree的，你需要构建pure reducer；

a reducer:
a pure function with (state, action) => state signature. It describes how an action transforms the state into the next state.
----reducer是一个纯函数，参数是state和action 函数描述了action是怎么如何改变state的；

a state： 
整个app数据存放的对象，表现上可以是数字，字符串 Object function等，需要特别注意：在状态改变的时候，你不应该直接改变state而是应该new a state to return；

=====Examples
The Redux repository contains several example projects demonstrating various aspects of how to use Redux. Almost all examples have a corresponding CodeSandbox sandbox. This is an interactive version of the code that you can play with online.
----redux代码库包含了几个例子，这些例子通过不同的视角展示了怎么使用redux，每个例子都有自己的代码分割开来，可以自己试一下。

=====Learn Redux
We have a variety of resources available to help you learn Redux, no matter what your background or learning style is.
丰富的资源给你去学习，没有学不会这一说。

=====Just the Basics
If you're brand new to Redux and want to understand the basic concepts, see:
The Motivation behind building Redux, the Core Concepts, and the Three Principles.
The basic tutorial in the Redux docs
----如果你是个新手 想要知道redux的一些基础概念。你需要看以下章节：
1。Motivation（动力）：构建redux的原因，基本概念和原理。
2。basic tutorial ：基础的流程

剩下来的一大堆内容就是你学习到不同的阶段，应该参考什么资料：初级 进阶 具体项目 何种情况下使用。


作为一个新手：
========================================================
1.Motivation（动力 为什么构建redux）
========================================================
As the requirements for JavaScript single-page applications have become increasingly complicated（对页面的要求越来越高）, our code must manage more state than ever before（你会发现，你的app里面需要你来掌握的state越来越复杂，一个counter，只要记录次数即可，但是像我们上次开发的技能编辑器，你需要里记录的信息state很多，假如不引入redux， 我们可以使用控件的state来代替，那么交互怎么办，全部提升到最上面top-level？）. This state can include server responses and cached data, as well as locally created data that has not yet been persisted to the server. UI state is also increasing in complexity, as we need to manage active routes, selected tabs, spinners, pagination controls, and so on.

Managing this ever-changing state is hard. （管理这个一直变化的状态是很难的）If a model can update another model, then a view can update a model, which updates another model, and this, in turn, might cause another view to update. At some point, you no longer understand what happens in your app as you have lost control over the when, why, and how of its state. When a system is opaque and non-deterministic, it's hard to reproduce bugs or add new features.（当你无法清晰的管理你的装的时候，你讲不掌控你的app在做什么，而这又将导致你无法高效的调试bug和灵活添加一些新功能，仔细品味这句，其实不仅仅适用于你的代码，同样还适用于你的生活，当你的大脑处于一片混乱中的时候，一定是因为有太多的信息需要处理， 而你目前的大脑没有处理这种状态的能力？学过这个之后你也应该掌握一套你自己管理生活的能力， 扯远了 拉回来）；

As if this weren't bad enough, consider the new requirements becoming common in front-end product development. As developers, we are expected to handle optimistic updates, server-side rendering, fetching data before performing route transitions, and so on. We find ourselves trying to manage a complexity that we have never had to deal with before, and we inevitably ask the question: is it time to give up? The answer is no.

This complexity（复杂） is difficult to handle as we're mixing two concepts that are very hard for the human mind to reason about: mutation and asynchronicity. I call them Mentos and Coke. Both can be great in separation, but together they create a mess. Libraries like React attempt to solve this problem in the view layer by removing both asynchrony and direct DOM manipulation. However, managing the state of your data is left up to you. This is where Redux enters.（？？？难题）

Following in the steps of Flux, CQRS, and Event Sourcing, Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the three principles of Redux.
（紧跟这flux cqrs 的步伐， redux尝试使状态的变化可预测， 通过实行强制性的限制在什么时候更新什么时候改变， 这些限制具体的变现就是在redux 的3个主要原则）

========================================================
2.Core Concepts
========================================================
state: 
  >数据 
  >The state of your whole application is stored in an object tree within a single store.
    app中应该都只有一份store，即一个single js object 
  >a javascript object
  
action:
  >行为
  >根据复查程度从0～n
  >a javascript object

reducer:
  >处理 
  >根据复查程度从0
  >a function,param is state and action return a new state 


========================================================
3.Three Principles
========================================================  
  >Single source of truth
  The state of your whole application is stored in an object tree within a single store.

  This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort. A single state tree also makes it easier to debug or inspect an application; it also enables you to persist your app's state in development, for a faster development cycle. Some functionality which has been traditionally difficult to implement - Undo/Redo, for example - can suddenly become trivial to implement, if all of your state is stored in a single tree.

  >State is read-only
  The only way to change the state is to emit an action, an object describing what happened.

  This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes
  >Changes are made with pure functions
  To specify how the state tree is transformed by actions, you write pure reducers.

  Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state. You can start with a single reducer, and as your app grows, split it off into smaller reducers that manage specific parts of the state tree. Because reducers are just functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination.

  
========================================================
3.Basics Tutorial
========================================================  
  >Actions
  First, let's define some actions.

    Actions are payloads（载体） of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using 
    “store.dispatch()“

    Actions are plain（简朴的清淡的） JavaScript objects. Actions must（必须要有“type”属性） have a type property that indicates（指出） the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.
    （js对象， 拥有“type”属性，属性值应该const string）
    ===》import { ADD_TODO, REMOVE_TODO } from '../actionTypes'（将所有type整理在一起，是一只种好的习惯）；

  >store

  >Reduce
  It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue). It's very important that the reducer stays pure. Things you should never do inside a reducer:（保持函数的纯洁性，你不应在reducer中做除了改边状态之外的其他任何事情特别是以下几点：
    <1> Mutate its arguments; 修改参数；
      具体的实现  Object.assign({}, state, newstate);
                {...state, ...newstate} 
                if no action return  oldstate
    <2> Perform side effects like API calls and routing transitions;
    <3> Call non-pure functions, e.g. Date.now() or Math.random() 
    ----pure function(纯函数：输入和输出可预测的函数)
      <1>同样的参数返回的结果一样；
      <2>没有副作用；
    ----side effects（副作用：I/O 操作，修改函数入参或函数外部的变量，抛出异常等。） 
    我们常用的 console.log() 函数 -- 会输出内容到控制台，
    用来生成随机数的 Math.random() -- 会改变全局的 seed，
    Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

========================================
Data Flow 数据流
Redux architecture（建筑风格） revolves（以。。。为中心） around a strict unidirectional（单向的） data flow.
========================================
This means that all data in an application follows the same lifecycle pattern, making the logic of your app more predictable（可预测的） and easier to understand. It also encourages data normalization, so that you don't end up with multiple, independent copies of the same data that are unaware of one another.



========================================
API    
========================================
|____store.getState 获取当前状态； 无参数；返回state当前状态；
|____store.dispatch 触发改变；参数：action；触犯行为；
|____store.subscribe 注册监听器返回一个函数，执行该函数取消对应监听器；
|____store.createStore 创建store；参数：reducer；
|____store.combineReducers 合并reducer；参数：reducer；






  




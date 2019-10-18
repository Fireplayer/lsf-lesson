/**
 * create
 */
import React from 'react';

let as = React.createClass();
class Demo extends React.Component {
  state = {
    route: window.location.hash.substr(1)
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.handleHashChange)
  }

  handleHashChange = ()=> {
    this.setState({route: window.location.hash.substr(1)});
  }

  render() {
    let Child
    switch (this.state.route) {
      case '/about': Child = About; break;
      case '/inbox': Child = Inbox; break;
      default:      Child = Home;
    }

    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#/about">About</a></li>
          <li><a href="#/inbox">Inbox</a></li>
        </ul>
        <Child/>
      </div>
    )
  }
}
const About = React.createClass({/*...*/})

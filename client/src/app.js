import React, { Component } from 'react';
import NavvBar from './NavvBar';

class App extends Component{
  render () {
    return(
      <div>
      <NavvBar className="nav-flex" />
      { this.props.children }
      </div>
    )
  }
}

export default App

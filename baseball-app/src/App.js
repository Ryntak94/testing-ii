import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Display extends Component   {
    render()    {
        return(
            <div>

            </div>
        )
    }
}

class Dashboard extends Component   {
    render()    {
        return(
            <div>
            </div>
        )
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Dashboard />
      </div>
    );
  }
}

export default App;
export {
    Dashboard,
    Display
}

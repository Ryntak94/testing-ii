import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Display extends Component   {
    constructor(props)  {
        super(props);
        this.state  =   {
            strikes: 0,
            balls:  0
        }
    }
    render()    {
        return(
            <div>
                Strikes: <div data-testid='strikes'>{this.state.strikes}</div>
                Balls: <div data-testid='balls'>{this.state.balls}</div>
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

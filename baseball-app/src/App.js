import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Display extends Component   {
    constructor(props)  {
        super(props);
    }
    render()    {
        return(
            <div>
                Strikes: <div data-testid='strikes'>{this.props.strikes}</div>
                Balls: <div data-testid='balls'>{this.props.balls}</div>
            </div>
        )
    }
}

class Dashboard extends Component   {
    render()    {
        return(
            <div>
                <div data-testid='strikeButton'>Strike</div>
                <div data-testid='ballButton'>Ball</div>
                <div data-testid='foulButton'>Foul</div>
                <div data-testid='hitButton'>Hit</div>
            </div>
        )
    }
}

class App extends Component {
    constructor(props)  {
        super(props);
        this.state  =   {
            balls: 0,
            strikes: 0
        }
    }



  render() {
    return (
      <div className="App">
        <Display strikes={this.state.strikes} balls={this.state.balls} />
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

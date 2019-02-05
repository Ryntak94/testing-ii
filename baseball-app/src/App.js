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
                <div data-testid='strikeButton' onClick={() =>  this.props.strikeButtonClickHandler()}>Strike</div>
                <div data-testid='ballButton' onClick={()   =>  this.props.ballButtonClickHandler()}>Ball</div>
                <div data-testid='foulButton' onClick={()   =>  this.props.foulButtonClickHandler()}>Foul</div>
                <div data-testid='hitButton' onClick={()    =>  this.props.hitButtonClickHandler()}>Hit</div>
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

    strikeButtonClickHandler    =   ()  =>  {
        if(this.state.strikes    === 2)  {
            this.setState((state)   =>  ({
                strikes: 0,
                balls: 0
            }))
        }   else {
            this.setState((state)   =>  ({
                strikes: this.state.strikes + 1
            }))
        }
    }

    foulButtonClickHandler    =   ()  =>  {
        if(this.state.strikes    === 2)  {
            this.setState((state)   =>  ({
                strikes: 2,
                balls: 0
            }))
        }   else {
            this.setState((state)   =>  ({
                strikes: this.state.strikes + 1
            }))
        }
    }

    ballButtonClickHandler    =   ()  =>  {
        if(this.state.balls    === 3)  {
            this.setState((state)   =>  ({
                strikes: 0,
                balls: 0
            }))
        }   else {
            this.setState((state)   =>  ({
                balls: this.state.balls + 1
            }))
        }
    }

    hitButtonClickHandler    =   ()  =>  {
            this.setState((state)   =>  ({
                strikes: 0,
                balls: 0
            }))
    }

  render() {
    return (
      <div className="App">
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <Dashboard
            strikeButtonClickHandler = {this.strikeButtonClickHandler}
            foulButtonClickHandler = {this.foulButtonClickHandler}
            ballButtonClickHandler = {this.ballButtonClickHandler}
            hitButtonClickHandler = {this.hitButtonClickHandler}
        />
      </div>
    );
  }
}

export default App;
export {
    Dashboard,
    Display
}

import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    numberA: 10.9,
    numberB: 1.2
  }
  handleChange(event, number) {
    this.setState({ [number]: parseFloat(event.target.value) });
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <div>Simple app - Calculate the sum of 2 numbers (float)</div>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div class="Title-Num">
            <label>Number A: </label>
            <input className="input" onChange={event=>this.handleChange(event, 'numberA')} value={this.state.numberA} ></input>
          </div>
          <div class="Title-Num">
            <label>Number B: </label>
            <input className="input" onChange={event=>this.handleChange(event, 'numberB')} value={this.state.numberB}></input>
          </div>
          <div class="Title-Num">
            Sum
          </div>
          <div >
            {sum(this.state.numberA,this.state.numberB)}
          </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

function sum(a, b) {
  return a + b;
}


export default App;

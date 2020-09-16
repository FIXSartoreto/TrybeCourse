import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */


class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      clickCount1: 0,
      clickCount2: 0,
      clickCount3: 0
    }
  }
  
  handleClick(number) {
    if (number === 1) {
      this.setState((lastState, _props) => ({
        clickCount1: lastState.clickCount1 + 1
      }))
    } else if (number === 2) {
      this.setState((lastState, _props) => ({
        clickCount2: lastState.clickCount2 + 1
      }))
    } else {
      this.setState((lastState, _props) => ({
        clickCount3: lastState.clickCount3 + 1
      }))
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick(1)}>{this.state.clickCount1}</button>
        <button onClick={() => this.handleClick(2)}>{this.state.clickCount2}</button>
        <button onClick={() => this.handleClick(3)}>{this.state.clickCount3}</button>
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';

class Button extends Component {

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <button type='submit' name='enviar' onClick={this.handleSubmit}>Enviar</button>
        <button type='submit' name='limpar' onClick={this.handleSubmit}>Limpar</button>
      </div>
    );
  }
}

export default Button;
import React, { Component } from 'react';
import './Form.css';
import About from './About';
import AboutYou from './AboutYou';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      idade: 0,
      sobre: '',
      coisas: '',
      comparecer: false,
    }
    this.handleChanges = this.handleChanges.bind(this)
  }

  handleChanges({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <h1>Fixação aula Forms!</h1>
        <form className="form">
          <fieldset>
            <legend>All about you:</legend>
            <label>
              Digite seu nome:
              <input name='nome' type='text' value={this.state.name} onChange={this.handleChanges} />
            </label>
            <label>
              Digite sua idade: 
              <input name='idade' type='number' value={this.state.idade} onChange={this.handleChanges} />
            </label>
            <AboutYou value={this.handleChanges.sobre} handleChanges={this.handleChanges} />
            <label>
              Voce comparecerá?
              <input type='checkbox' name='comparecer' value={this.state.comparecer} onChange={this.handleChanges} />
            </label>
            <label>
              Adicione uma foto sua:
              <input type='file' />
            </label>
        </fieldset>
        <About value={this.handleChanges.coisas} handleChanges={this.handleChanges} />
        </form>
      </div>
    );
  }
}

export default Form;
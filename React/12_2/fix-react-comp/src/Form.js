import React, { Component } from 'react'
import './Form.css';

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
          <label>
            Escolha alguma coisa legal:
            <select name='coisas' value={this.state.coisas} onChange={this.handleChanges}>
              <option>Coisa 1</option>
              <option>Coisa 2</option>
              <option>Coisa 3</option>
              <option>Coisa 4</option>            
            </select>
          </label>
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
            <label>
              Digite algo sobre vc:
              <textarea name='sobre' value={this.state.sobre} onChange={this.handleChanges} />
            </label>
            <label>
              Voce comparecerá?
              <input type='checkbox' name='comparecer' value={this.state.comparecer} onChange={this.handleChanges} />
            </label>
            <label>
              Adicione uma foto sua:
              <input type='file' />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
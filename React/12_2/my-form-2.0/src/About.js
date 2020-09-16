import React, { Component } from 'react';

class About extends Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
    }
    this.handleChanges = this.handleChanges.bind(this)
    this.verifyCityName = this.verifyCityName.bind(this)
    this.removeAdressChar = this.removeAdressChar.bind(this)
  }

  handleChanges({ target }) {
    let { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;

    if(name === 'nome') value = value.toUpperCase()
    this.setState({
      [name]: value,
    })
  }

  removeAdressChar(event) {
    let { name, value } = event.target;
    if (name === 'endereço') {
      value = value.replace(/[^a-zA-Zs]/g, "");
    }
    this.setState( {
      [name]: value,
    })
  }

  verifyCityName(event) {
    let { name, value } = event.target;
    if (name === 'cidade') {
      const city = value.split('');
      if (isNaN(city[0]) === false) {
        value = '';
        console.log('deu certo')
      }
      this.setState({
        [name]: value,
      })
    }
  }

  render() {
    return (
      <fieldset>
        <label>
          Nome:
          <input name='nome' type='text' maxLength='40' required='required' value={this.state.nome} onChange={this.handleChanges} />
        </label>
        <label>
          Email:
          <input name='email' type='text' maxLength='50' required='required' value={this.state.email} onChange={this.handleChanges} />
        </label>
        <label>
          CPF:
          <input name='cpf' type='text' maxLength='11' required='required' value={this.state.cpf} onChange={this.handleChanges} />
        </label>
        <label>
          Endereço:
          <input name='endereço' type='text' maxLength='200' required='required' onBlur={this.removeAdressChar} value={this.state.endereço} onChange={this.handleChanges} />
        </label>
        <label>
          Cidade:
          <input name='cidade' type='text' maxLength='28' required='required' onBlur={this.verifyCityName} value={this.state.cidade} onChange={this.handleChanges} />
        </label>
        <label>
          Estado:
          <select name='estado' required='required' value={this.state.estado} onChange={this.handleChanges}>
            <option>MG</option>
            <option>RJ</option>
            <option>SP</option>
          </select>
        </label>
        <label>
          Moradia:
          <input type="radio" name="moradia" value='casa' required='required' />
          <label for="casa">Casa</label>
          <input type="radio" name="moradia" value='apartamento' required='required' />
          <label for="apartamento">Apartamento</label>
        </label>
      </fieldset>
       );
      }
    }
    
    export default About;
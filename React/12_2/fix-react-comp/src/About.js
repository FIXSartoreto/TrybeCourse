import React, { Component } from 'react';

class About extends Component {
  render() {
    const { value, handleChanges } = this.props;

    return (
      <label>
        Escolha alguma coisa legal:
        <select name='coisas' value={value} onChange={handleChanges}>
          <option>Coisa 1</option>
          <option>Coisa 2</option>
          <option>Coisa 3</option>
          <option>Coisa 4</option>            
        </select>
      </label>
    );
  }
}

export default About;
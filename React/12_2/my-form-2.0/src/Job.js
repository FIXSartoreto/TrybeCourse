import React, { Component } from 'react';

class Job extends Component {
  alertJob() {
    alert('Preencha esta info com cuidado!')
  }

  render() {
    return (
      <fieldset>
        <label>
          Resumo do curriculo:
          <textarea name='resumo' required='required' maxLength='1000' />
        </label>
        <label>
          Cargo:
          <textarea name='cargo' required='required' maxLength='40' onMouseEnter={this.alertJob} />
        </label>
        <label>
          Descrição do Cargo:
          <textarea name='descriçao' required='required' maxLength='500' />
        </label>
      </fieldset>
    );
  }
}

export default Job;
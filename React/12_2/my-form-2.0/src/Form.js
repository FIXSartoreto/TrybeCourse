import React, { Component } from 'react';
import './Form.css';
import Job from './Job'
import Button from './Button'
import About from './About'

class Form extends Component {
  render() {
    return (
      <div>
        <h1>Curriculum</h1>
        <form className="form">
          <About />
          <Job />
          <Button />
        </form>
      </div>
    );
  }
}

export default Form;
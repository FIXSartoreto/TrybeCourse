import React, { Component } from 'react'

class AboutYou extends Component {
  render() {
    const { value, handleChanges } = this.props;

    return (
      <label>
        Digite algo sobre vc:
        <textarea name='sobre' value={value} onChange={handleChanges} />
      </label>
    );
  }
}

export default AboutYou;
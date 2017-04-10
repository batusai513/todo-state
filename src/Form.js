import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    inputValue: 'Hola Mundo',
    select: 'valor1'
  }

  onInputChange(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} action="">
        <label htmlFor="label">input</label>
        <input
          name="inputValue"
          onChange={this.onInputChange.bind(this)}
          value={this.state.inputValue}
          id="label"
          type="text"
        />
        <label htmlFor="">Select</label>
        <select
          onChange={this.onInputChange.bind(this)}
          value={this.state.select}
          name="select"
          id="select">
          <option value="valor1">valor 1</option>
          <option value="valor2">valor 2</option>
          <option value="valor3">valor 3</option>
          <option value="valor4">valor 4</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}